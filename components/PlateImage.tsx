import Image from 'next/image';
import type { Plate } from '@/lib/content';

export default function PlateImage({ plate, sizes, priority }: { plate: Plate; sizes: string; priority?: boolean }) {
  return (
    <span className="relative block aspect-square w-full overflow-hidden rounded-[22px] shadow-[0_30px_60px_-20px_rgba(0,0,0,.8),0_0_0_1px_rgba(255,255,255,.08)]">
      <Image src={plate.src} alt={`Plaquinha ${plate.nome}`} fill sizes={sizes} priority={priority} className="object-cover" />
    </span>
  );
}
