import { ref } from 'vue'

export const useSectionObserver = (sectionIds) => {
  const activeSection = ref('')
  
  const initObserver = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            activeSection.value = entry.target.id
          }
        })
      },
      {
        root: null,
        rootMargin: '-50% 0px',
        threshold: 0.5
      }
    )

    sectionIds.forEach(id => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }

  return { activeSection, initObserver }
}

