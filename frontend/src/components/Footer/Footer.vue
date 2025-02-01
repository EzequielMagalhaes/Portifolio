<template>
  <footer class="footer">
    <div class="footer-content">
      <nav class="legal-links">
        <a href="/terms" class="legal-link">{{ $t('footer.terms') }}</a>
        <span class="divider">|</span>
        <a href="/privacy" class="legal-link">{{ $t('footer.privacy') }}</a>
      </nav>
      
      <div class="social-links">
        <SocialLink 
          v-for="(link, index) in socialLinks"
          :key="index"
          :href="link.url"
          :icon="link.icon"
          :alt="link.alt"
          :class="link.specialClass"
        />
      </div>
      
      <p class="copyright">
        &copy; {{ currentYear }} {{ $t('footer.copyright') }}
      </p>
    </div>
  </footer>
</template>

<script>
import SocialLink from './SocialLink.vue'
import linkedinIcon from '../../assets/footer-icons/linkedin-logo.svg'
import githubIcon from '../../assets/footer-icons/github-logo.svg'
import instagramIcon from '../../assets/footer-icons/instagram-logo.svg'

export default {
  components: { SocialLink },
  data() {
    return {
      currentYear: new Date().getFullYear(),
      socialLinks: [
        { 
          url: 'https://www.linkedin.com/in/ezequiel-magalhaes-dev/',
          icon: linkedinIcon,
          alt: 'LinkedIn profile'
        },
        { 
          url: 'https://github.com/EzequielMagalhaes',
          icon: githubIcon,
          alt: 'GitHub profile',
          specialClass: 'github-link'
        },
        { 
          url: 'https://www.instagram.com/zekiell._/',
          icon: instagramIcon,
          alt: 'Instagram profile'
        }
      ]
    }
  }
}
</script>

<style lang="postcss">
.footer {
  @apply bg-black py-6 px-4 md:px-8;
}

.footer-content {
  @apply max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4;
}

.legal-links {
  @apply flex items-center gap-3 order-1 md:order-none;
}

.legal-link {
  @apply text-neutral-400 hover:text-neutral-300 transition-colors text-sm;
}

.divider {
  @apply text-neutral-500;
}

.social-links {
  @apply flex gap-3 order-3 md:order-none;
}

.copyright {
  @apply text-neutral-500 text-sm order-2 md:order-none;
}

.github-link {
  @apply bg-neutral-700 hover:bg-neutral-300;
}
</style>