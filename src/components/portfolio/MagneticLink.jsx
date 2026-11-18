function resetMagnet(event) {
  event.currentTarget.style.setProperty('--magnetic-x', '0px')
  event.currentTarget.style.setProperty('--magnetic-y', '0px')
}

function MagneticLink({ href, className = '', children, download, ...props }) {
  const moveMagnet = (event) => {
    if (event.pointerType === 'touch' || !window.matchMedia('(pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 7
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 5
    event.currentTarget.style.setProperty('--magnetic-x', `${x}px`)
    event.currentTarget.style.setProperty('--magnetic-y', `${y}px`)
  }

  return (
    <a
      href={href}
      download={download}
      className={`button magnetic-link ${className}`.trim()}
      onPointerMove={moveMagnet}
      onPointerLeave={resetMagnet}
      onBlur={resetMagnet}
      {...props}
    >
      {children}
    </a>
  )
}

export default MagneticLink
