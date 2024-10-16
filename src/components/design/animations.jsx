export const ANIMATE_CHROMA_CSS = `.animate-chroma{
    animation: chroma 30s linear infinite;
    background-size: 2000%;
    background: linear-gradient(
      to left,#f8baa3,#ef6676,
      #ee4566,#ef6676,#f8baa3,)}
  
  @keyframes chroma {
      to {
        background-position: 1200%;
      }
  }`

export const ANIMATE_GLOW_CSS = `.animate-glow{
    animation: animate-glow 3s linear infinite;}
  
    @keyframes animate-glow {
      50% {
        box-shadow: 0px 0px 20px var(--primary);
  }}`

export const ANIMATE_OPACITY_CSS = `.animate-opacity{
    animation: opacity 2s linear infinite;}
  
    @keyframes opacity{
      from{
          opacity:0
      }
      to{
          opacity:1
  }}`
