'use client';

import type React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/components/ui/use-toast';

interface RsvpFormProps {
  onSubmit: () => void; // Callback to notify parent of successful submission
}

export default function RsvpForm({ onSubmit }: RsvpFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendance: 'yes',
    guests: 0,
    children: 0,
    dietaryRestrictions: '',
    preWeddingEvent: false,
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, attendance: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, preWeddingEvent: checked }));
  };

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: 'Nové svatební RSVP',
          text: `RSVP Details:
Jméno: ${formData.name}
Email: ${formData.email}
Telefon: ${formData.phone}
Účastním se?: ${
            formData.attendance === 'yes'
              ? 'Ano, s radostí přijdu'
              : 'Ne, bohužel se nemohu zúčastnit'
          }
Počet doprovázejících dospělích: ${formData.guests}
Počet dětí: ${formData.children}
Diety: ${formData.dietaryRestrictions || 'None'}
Zúčastním se pátečního eventu?: ${formData.preWeddingEvent ? 'Ano' : 'Ne'}
Message: ${formData.message || 'No message'}`,
          to: 'kubzej8@gmail.com',
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: 'RSVP odesláno',
          description: 'Děkujeme za vaši odpověď!',
        });
        onSubmit(); // Notify parent of successful submission
      } else {
        throw new Error(result.error || 'Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: 'Chyba',
        description: 'Nepodařilo se odeslat RSVP.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Form fields */}
      <div className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-sm font-medium">
            Jméno a příjmení
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 bg-[#edede9]/30 border-[#d5bdaf]/20 focus:border-[#d5bdaf] focus:ring-[#d5bdaf]"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-sm font-medium">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 bg-[#edede9]/30 border-[#d5bdaf]/20 focus:border-[#d5bdaf] focus:ring-[#d5bdaf]"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-sm font-medium">
            Telefon
          </Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 bg-[#edede9]/30 border-[#d5bdaf]/20 focus:border-[#d5bdaf] focus:ring-[#d5bdaf]"
          />
        </div>

        <div>
          <Label className="text-sm font-medium">Zúčastníte se?</Label>
          <RadioGroup
            value={formData.attendance}
            onValueChange={handleRadioChange}
            className="flex flex-col space-y-1 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" className="text-[#d5bdaf]" />
              <Label htmlFor="yes" className="text-sm">
                Ano, s radostí přijdu
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" className="text-[#d5bdaf]" />
              <Label htmlFor="no" className="text-sm">
                Bohužel se nemohu zúčastnit
              </Label>
            </div>
          </RadioGroup>
        </div>

        {formData.attendance === 'yes' && (
          <>
            <div>
              <Label htmlFor="guests" className="text-sm font-medium">
                Počet doprovázejících osob (dospělí)
              </Label>
              <Input
                id="guests"
                name="guests"
                type="number"
                min="0"
                value={formData.guests}
                onChange={handleChange}
                className="mt-1 bg-[#edede9]/30 border-[#d5bdaf]/20 focus:border-[#d5bdaf] focus:ring-[#d5bdaf]"
              />
            </div>

            <div>
              <Label htmlFor="children" className="text-sm font-medium">
                Počet doprovázejících osob (děti)
              </Label>
              <Input
                id="children"
                name="children"
                type="number"
                min="0"
                value={formData.children}
                onChange={handleChange}
                className="mt-1 bg-[#edede9]/30 border-[#d5bdaf]/20 focus:border-[#d5bdaf] focus:ring-[#d5bdaf]"
              />
            </div>

            <div>
              <Label
                htmlFor="dietaryRestrictions"
                className="text-sm font-medium"
              >
                Stravovací omezení
              </Label>
              <Textarea
                id="dietaryRestrictions"
                name="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={handleChange}
                placeholder="Vegetariánská strava, alergie, apod."
                className="mt-1 bg-[#edede9]/30 border-[#d5bdaf]/20 focus:border-[#d5bdaf] focus:ring-[#d5bdaf]"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="preWeddingEvent"
                checked={formData.preWeddingEvent}
                onCheckedChange={handleCheckboxChange}
                className="text-[#d5bdaf] border-[#d5bdaf]/50"
              />
              <Label htmlFor="preWeddingEvent" className="text-sm">
                Zúčastním se předsvatebního grilování (29. května)
              </Label>
            </div>
          </>
        )}

        <div>
          <Label htmlFor="message" className="text-sm font-medium">
            Vzkaz pro novomanžele
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Nepovinné"
            className="mt-1 bg-[#edede9]/30 border-[#d5bdaf]/20 focus:border-[#d5bdaf] focus:ring-[#d5bdaf]"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-[#d5bdaf] hover:bg-[#c5a99b] text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Odesílání...' : 'Odeslat RSVP'}
      </Button>
    </form>
  );
}
