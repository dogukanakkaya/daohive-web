import FeatureBox from '@/components/Home/FeatureBox.tsx'

const features = Object.freeze([
  {
    title: 'Add Proposals',
    content:
      'Empower your organization to shape its future with ease. Seamlessly submit and discuss proposals, allowing your members to voice their ideas and contribute to the collective vision. Embrace a dynamic platform that fosters innovation and inclusivity.',
    image: '/feature-left1.png'
  },
  {
    title: 'Manage Smart Contracts',
    content:
      'Take command of your smart contracts effortlessly. Our platform provides you with the tools you need to manage and monitor your contracts in real-time. Ensure compliance and transparency while maintaining control over your organization\'s financial and operational integrity.',
    image: '/feature-right1.png'
  },
  {
    title: 'Add Voters',
    content:
      'Broaden your organization\'s democratic reach by adding new voters. Extend the power of decision-making to a wider audience, fostering diversity of thought and participation. With a few simple steps, you can invite individuals who matter most to your community.',
    image: '/feature-left2.png'
  },
  {
    title: 'Integrate with Your System',
    content:
      'Forge a seamless connection between your organization\'s existing systems and our robust API. Unlock a world of possibilities as you harness the power of automation and data-driven decision-making. Say goodbye to siloed operations and welcome a new era of efficiency and collaboration. Integrate, automate, and elevate your organization\'s potential with ease.',
    image: '/feature-right2.png'
  }
])

export default function Features() {
  return (
    <section className="mt-20 md:grid grid-cols-2 gap-20 px-6">
      {features.map((feature) => <FeatureBox feature={feature} />)}
    </section>
  )
}
