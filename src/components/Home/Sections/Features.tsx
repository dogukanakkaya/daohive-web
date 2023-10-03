import FeatureBox from '@/components/Home/FeatureBox.tsx'

const features = Object.freeze([
  {
    title: 'Add Proposals',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente molestias sed quis maiores ipsa similique dolores quidem illo accusamus minima repudiandae quae itaque est consequuntur cumque dolor, quisquam velit quo!',
    image: '/temp-home-left.png'
  },
  {
    title: 'Manage Smart Contracts',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente molestias sed quis maiores ipsa similique dolores quidem illo accusamus minima repudiandae quae itaque est consequuntur cumque dolor, quisquam velit quo!',
    image: '/temp-home-right.png'
  },
  {
    title: 'Add Proposals',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente molestias sed quis maiores ipsa similique dolores quidem illo accusamus minima repudiandae quae itaque est consequuntur cumque dolor, quisquam velit quo!',
    image: '/temp-home-left.png'
  },
  {
    title: 'Manage Smart Contracts',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente molestias sed quis maiores ipsa similique dolores quidem illo accusamus minima repudiandae quae itaque est consequuntur cumque dolor, quisquam velit quo!',
    image: '/temp-home-right.png'
  }
])

export default function Features() {
  return (
    <section class="mt-20 md:grid grid-cols-2 gap-20 px-6">
      {features.map((feature) => <FeatureBox feature={feature} />)}
    </section>
  )
}
