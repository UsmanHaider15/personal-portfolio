import { Service } from 'types'

interface ServicesSectionProps {
  services: Service[]
}

const ServicesSection = ({ services }: ServicesSectionProps) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <span
          className="mb-2 block font-sans text-xs text-center font-semibold uppercase text-gray-600"
          style={{ letterSpacing: 3 }}
        >
          My Services
        </span>
        <h2 className="mx-0 mb-6 mt-0 font-serif text-4xl font-normal leading-normal text-black text-center">
          Here Are Some of My Skills
        </h2>
      </div>

      <div className="md:grid md:grid-cols-2">
        {services.map((service, key) => {
          return (
            <div className="leading-7 text-black md:col-span-1 flex flex-col items-center justify-center">
              <h3
                className="mx-0 mt-0 mb-4 font-sans text-base font-bold uppercase text-black text-center"
                style={{ lineHeight: '1.1' }}
              >
                {service.serviceName}
              </h3>
              <ul className="block mt-0 mb-6 text-black text-center">
                {service.subServices.map((subService, key) => (
                  <li
                    className="mb-2 text-center text-gray-600"
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
    </div>
  )
}

export default ServicesSection
