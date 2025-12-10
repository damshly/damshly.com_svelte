<script lang="ts">
  import { Github, Linkedin, Youtube, Twitter } from "lucide-svelte";
  let aboutLines = [
    "🚀 About Me",
    "Back-end Developer | DevOps Enthusiast | Linux Power User",
    "Passionate About: Scalable back-end systems, DevOps automation, and Linux customization.",
    "What I Build: Custom CMS, API services, self-hosted solutions, and automation tools.",
    "Project Philosophy: Performance, efficiency, and maintainability."
  ];
</script>

<div class="h-screen w-screen bg-gradient-to-bl from-black via-gray-900 to-purple-950 relative overflow-hidden flex flex-col items-center justify-center text-center px-4">

  <!-- نجوم -->
  {#each Array(80) as _, i}
    <div 
      class="absolute bg-white rounded-full animate-pulse"
      style="width:{Math.random() * 2 + 1}px; height:{Math.random() * 2 + 1}px; top:{Math.random() * 100}%; left:{Math.random() * 100}%; animation-delay:{Math.random() * 2}s"
    ></div>
  {/each}

  <!-- الاسم -->
  <h1 class="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 animate-text-glow mb-4">
    Damshly
  </h1>

  <!-- نبذة عنك -->
<div class="text-gray-300 max-w-xl mb-6 text-lg space-y-2 flex flex-col items-center">
  {#each aboutLines as line}
    <p class="whitespace-nowrap">{line}</p>
  {/each}
</div>

  <!-- روابط التواصل مع أيقونات -->
  <div class="flex gap-6 text-gray-400">
    <a href="https://github.com/damshly" target="_blank" class="hover:text-white transition-colors flex items-center gap-2">
      <Github class="w-5 h-5"/> GitHub
    </a>
    <a href="https://x.com/Abdalrhman_Dam" target="_blank" class="hover:text-white transition-colors flex items-center gap-2">
      <Twitter class="w-5 h-5"/> Twitter  
    </a>
    <!-- <a href="https://youtube.com/@damshly" target="_blank" class="hover:text-white transition-colors flex items-center gap-2">
      <Youtube class="w-5 h-5"/> YouTube
    </a> -->
  </div>
</div>

<style>
  @keyframes text-glow {
    0%, 100% { filter: drop-shadow(0 0 5px #6b21a8) drop-shadow(0 0 10px #0ea5e9); }
    50% { filter: drop-shadow(0 0 10px #6b21a8) drop-shadow(0 0 20px #0ea5e9); }
  }

  .animate-text-glow {
    animation: text-glow 3s infinite alternate;
  }
</style>
