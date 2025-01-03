import { ProfileConfig } from "@/types/profile"

export const profileConfig: ProfileConfig = {
  nameAndBio: `
    <script src="https://cdn.tailwindcss.com"></script>
    <body class="bg-gray-100 text-gray-800 font-sans flex flex-col items-center justify-center min-h-screen p-4">

  <h1 id="title" class="text-4xl font-bold text-gray-500">KopaChaser</h1>
  <p class="text-sm text-gray-500/60 line-through">fvld slayer</p>
  <p class="text-lg mt-2">Chill guy</p>
  <p class="mt-2">Mono Shaco <br> 17y <br> discord: kopachaser</p>
  `,
  lastfmUsername: "KopaChaser",
  avatar: "https://i.ibb.co/4sM4VbK/3e443f4caa45cce4632f02774c95ff68.jpg",
  wallpaper: {
    url: "https://i.ibb.co/fMg5D75/2394-moon-pfpsgg.gif",
    blur: {
      enabled: true,
      intensity: 10
    },
    overlay: "from-gray-900/80 to-gray-900/60"
  },
  cardColor: "bg-gray-800/40",
  buttonOutlineColor: "gray-700/60",
  links: [
    
    {
      label: "Twitter",
      url: "https://x.com/KopaChaserSHACO",
      icon: "https://i.ibb.co/2yXsGWQ/Twitter-X-Rounded-Icon.png"
    },
    {
      label: "Last.fm",
      url: "https://www.last.fm/pt/user/KopaChaser",
      icon: "https://cdn-icons-png.flaticon.com/512/3291/3291646.png"
    }
  ],
  customLinks: [
    {
      label: "Discord <span class='text-blue-400'>&rarr;</span>",
      url: "https://discord.gg/885rTkajzE",
      icon: "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png"
    }
  ],
}

