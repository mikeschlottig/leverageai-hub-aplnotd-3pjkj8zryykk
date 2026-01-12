import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
interface ContactSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  solutionTitle?: string;
}
export function ContactSheet({ open, onOpenChange, solutionTitle }: ContactSheetProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Mock submission
    toast.success('Consultation request sent!', {
      description: 'Thank you for your interest. We will get back to you shortly.',
    });
    onOpenChange(false);
  };
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Request a Consultation</SheetTitle>
          <SheetDescription>
            Fill out the form below and one of our experts will contact you to discuss your needs.
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit} className="py-8 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="john.doe@example.com" required />
          </div>
          {solutionTitle && (
            <div className="space-y-2">
              <Label htmlFor="interest">Area of Interest</Label>
              <Input id="interest" value={solutionTitle} readOnly />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Tell us about your project or challenges..." required />
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="button" variant="outline">Cancel</Button>
            </SheetClose>
            <Button type="submit" className="btn-gradient">Submit Request</Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}