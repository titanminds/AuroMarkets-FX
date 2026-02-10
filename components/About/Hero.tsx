import React from "react"

interface Breadcrumb {
  label: string
  href?: string
}

interface PageHeroProps {
  title: string
  description?: string
  backgroundImage: string
  breadcrumbs?: Breadcrumb[]
  showMapOverlay?: boolean
  height?: string
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  description,
  backgroundImage,
  breadcrumbs = [],
  showMapOverlay = true,
  height = "h-[450px]",
}) => {
  return (
    <section
      className={`relative w-full overflow-hidden bg-slate-900 font-sans ${height}`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />

      {/* Optional World Map Overlay */}
      {showMapOverlay && (
        <div
          className="absolute inset-0 z-10 opacity-20 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/world-map-pattern.png')" }}
        />
      )}

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center max-w-7xl mx-auto">
        <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl">
          {title}
        </h1>

        {description && (
          <p className="max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
            {description}
          </p>
        )}

        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <div className="absolute bottom-10 left-10 flex items-center gap-2 text-sm font-medium text-white">
            {breadcrumbs.map((item, index) => (
              <React.Fragment key={index}>
                <span className="cursor-pointer hover:text-red-500 transition-colors">
                  {item.label}
                </span>
                {index !== breadcrumbs.length - 1 && (
                  <span className="text-red-600">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default PageHero
