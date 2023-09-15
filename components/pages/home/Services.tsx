import { Service } from 'types'

interface ServicesSectionProps {
  services: Service[]
}

const ServicesSection = ({ services }: ServicesSectionProps) => {
  return (
    <div>
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
                <li className="mb-2 text-left" style={{ listStyle: 'none' }}>
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
