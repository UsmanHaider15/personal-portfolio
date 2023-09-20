import { Service } from 'types'

interface ServicesSectionProps {
  services: Service[]
}

const ServicesSection = ({ services }: ServicesSectionProps) => {
  return (
    <div>
      <div className="relative leading-7 lg:float-left lg:w-full">
        <span
          className="mb-2 block font-sans text-xs font-semibold uppercase leading-5 text-stone-300 opacity-30"
          style={{ letterSpacing: 3 }}
        >
          My Services
        </span>
        <h2 className="relative mx-0 mb-6 mt-0 font-serif text-4xl font-normal leading-normal text-black">
          Here Are Some of My Skills
        </h2>
      </div>

      {services.map((service, key) => {
        console.log(key)
        return (
          <div
            className="mb-16 leading-7 text-black"
            style={{
              animationDuration: '1s',
              animationFillMode: 'both',
              animationName: 'fadeInUp',
            }}
          >
            <h3
              className="mx-0 mt-0 mb-4 font-sans text-base font-bold uppercase text-black"
              style={{ lineHeight: '1.1' }}
            >
              {key + 1} - {service.serviceName}
            </h3>
            <ul className="block mt-0 mb-6 text-black">
              {service.subServices.map((subService, key) => (
                <li
                  className="mb-2 text-left text-stone-300 opacity-50"
                  style={{ listStyle: 'none' }}
                >
                  {subService}
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default ServicesSection
