<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="shell footer-inner">
      <span>© {{ year }} Lennox Luis Omaña</span>
      <span>Built with Nuxt</span>
      <a class="to-top" href="#home">Back to top ↑</a>
    </div>
  </footer>
</template>
