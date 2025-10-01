import { PUBLIC_API_BASE } from 'astro:env/client'

const apiBase = PUBLIC_API_BASE || 'https://viajadoras-7fb3fd8a76a0.herokuapp.com'

function setupLeadForm() {
  const form = document.getElementById('lead-form') as HTMLFormElement | null
  const err = document.getElementById('lead-error')
  if (!form) return
  const thanks = (form.dataset.thanks as string) || '/obrigada'
  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    err?.classList.add('hidden')
    const data = Object.fromEntries(new FormData(form)) as Record<string, FormDataEntryValue>
    const payload = {
      name: (data.name || '').toString().trim() || undefined,
      email: (data.email || '').toString().trim(),
      phone: (data.phone || '').toString().trim() || undefined,
    }
    try {
      const res = await fetch(`${apiBase}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      ;(window as any).plausible && (window as any).plausible('lead_submit')
      if (res.ok || res.status === 409) {
        window.location.href = thanks
      } else {
        err?.classList.remove('hidden')
      }
    } catch {
      err?.classList.remove('hidden')
    }
  })
}

setupLeadForm()

