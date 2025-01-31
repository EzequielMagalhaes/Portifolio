export const validateEmailDomain = (email, allowedDomains) => {
    if (!email) return false
    const domain = email.substring(email.lastIndexOf('@') + 1)
    return allowedDomains.some(allowed => domain === allowed)
  }