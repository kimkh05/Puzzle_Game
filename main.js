if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.documentElement.classList.add("dark")
  }
  document.getElementById("darkTheme").addEventListener("click",() => {
  document.documentElement.classList.toggle("dark")
  })
  // 다크모드 적용