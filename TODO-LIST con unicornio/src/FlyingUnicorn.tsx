import { useEffect, useState } from "react"

interface FlyingUnicornProps {
  isVisible: boolean
}

export const FlyingUnicorn = ({ isVisible }: FlyingUnicornProps) => {
  const [position, setPosition] = useState({ x: -100, y: 50 })

  useEffect(() => {
    if (!isVisible) return

    // Animación del unicornio volando
    let animationFrame: number
    let direction = 1
    let fireInterval: number

    const animate = () => {
      setPosition((prev) => {
        // Mover el unicornio de izquierda a derecha
        let newX = prev.x + 3 * direction

        // Cambiar dirección cuando llega a los bordes
        if (newX > window.innerWidth) {
          direction = -1
          newX = window.innerWidth
        } else if (newX < -100) {
          direction = 1
          newX = -100
        }

        // Movimiento ondulado en el eje Y
        const newY = 50 + Math.sin(newX / 50) * 30

        return { x: newX, y: newY }
      })

      animationFrame = requestAnimationFrame(animate)
    }

    // Iniciar animación
    animate()

    // Crear fuego cada 2 segundos
    fireInterval = window.setInterval(() => {
      const fire = document.createElement("div")
      fire.className = "unicorn-fire"
      fire.style.left = `${position.x + 80}px`
      fire.style.top = `${position.y + 30}px`
      document.body.appendChild(fire)

      // Eliminar el fuego después de la animación
      setTimeout(() => {
        if (fire.parentNode) {
          fire.parentNode.removeChild(fire)
        }
      }, 1000)
    }, 2000)

    return () => {
      cancelAnimationFrame(animationFrame)
      clearInterval(fireInterval)
      // Limpiar cualquier fuego restante
      document.querySelectorAll(".unicorn-fire").forEach((el) => {
        if (el.parentNode) {
          el.parentNode.removeChild(el)
        }
      })
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div
      className="flying-unicorn"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="unicorn-body">🦄</div>
    </div>
  )
}



