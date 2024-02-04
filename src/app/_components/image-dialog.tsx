import Image from 'next/image'
import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'

export function ImageDialog({ publicId }: { publicId: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-8 bg-pink-500 text-black">
          <span className="sr-only">Open modal</span>
          <Image
            width={200}
            height={200}
            src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_200,f_auto,q_auto/v1705758405/Michelle.Cole.Wedding-0248_gzyi2d.jpg"
            alt="nigel-and-shinta-g"
            className="object-cover object-top"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
