import axios from 'axios'

const JUDGE0_API_URL = 'https://judge0-ce.p.rapidapi.com'

const JUDGE0_HEADERS = {
  'x-rapidapi-key': import.meta.env.VITE_JUDGE0_KEY || 'demo',
  'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
  'Content-Type': 'application/json',
}

// Timeout for polling results (10 seconds)
const TIMEOUT = 10000
const POLL_INTERVAL = 500

interface ExecutionResult {
  stdout: string
  stderr: string
  status: 'success' | 'error' | 'timeout'
  statusText?: string
}

export async function executeCode(code: string): Promise<ExecutionResult> {
  try {
    // Create submission
    const submitResponse = await axios.post(
      `${JUDGE0_API_URL}/submissions?base64_encoded=false`,
      {
        source_code: code,
        language_id: 64, // C# language ID
        stdin: '',
      },
      { headers: JUDGE0_HEADERS }
    )

    const submissionToken = submitResponse.data.token

    // Poll for result
    const result = await pollForResult(submissionToken)
    return result
  } catch (error) {
    console.error('Code execution error:', error)
    return {
      stdout: '',
      stderr: 'שגיאה בהרצת הקוד. אנא נסו שוב מאוחר יותר.',
      status: 'error',
    }
  }
}

async function pollForResult(token: string): Promise<ExecutionResult> {
  const startTime = Date.now()

  while (Date.now() - startTime < TIMEOUT) {
    try {
      const response = await axios.get(
        `${JUDGE0_API_URL}/submissions/${token}?base64_encoded=false`,
        { headers: JUDGE0_HEADERS }
      )

      const { status, stdout, stderr, compile_output } = response.data

      // Status: 1=In Queue, 2=Processing, 3=Accepted, 4=Wrong Answer, 5=Time Limit, etc.
      if (status.id > 2) {
        // Compilation error
        if (compile_output && compile_output.length > 0) {
          return {
            stdout: '',
            stderr: compile_output,
            status: 'error',
            statusText: status.description,
          }
        }

        // Runtime error
        if (stderr && stderr.length > 0) {
          return {
            stdout: stdout || '',
            stderr: stderr,
            status: 'error',
            statusText: status.description,
          }
        }

        // Success
        return {
          stdout: stdout || '',
          stderr: '',
          status: 'success',
          statusText: status.description,
        }
      }

      // Still processing, wait before polling again
      await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL))
    } catch (error) {
      console.error('Polling error:', error)
      await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL))
    }
  }

  return {
    stdout: '',
    stderr: 'זמן ההמתנה חלף. אנא בדקו את הקוד שלכם.',
    status: 'timeout',
  }
}
