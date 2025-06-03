import { Separator } from '@/components/ui/separator'

function SectionHeader({ title }: { title: string }) {
  return (
    <>
      <div className="flex items-start mb-4">
        <h2 className="font-bold text-xl">{title}</h2>
      </div>
      <Separator />
    </>
  )
}

export default SectionHeader
