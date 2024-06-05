import { useToast } from 'primevue/usetoast'
const toast = useToast()

export const baseApiUrl = 'http://localhost:3000'

export function showError(e: any) {
  if (e && e.response && e.response.data) {
    toast.global.defaultError({ msg: e.response.data })
  } else if (typeof e === 'string') {
    toast.global.defaultError({ msg: e })
  } else {
    toast.global.defaultError()
  }
}

export default { baseApiUrl, showError }
