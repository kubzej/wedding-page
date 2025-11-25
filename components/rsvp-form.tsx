'use client';

import type React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';

interface RsvpFormProps {
  onSubmit: () => void; // Callback to notify parent of successful submission
}

export default function RsvpForm({ onSubmit }: RsvpFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendance: 'yes',
    guests: '',
    children: '',
    dietaryRestrictions: '',
    preWeddingEvent: false,
    accommodation: false,
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

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Sending RSVP with data:', formData);

      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      const emailParams = {
        to_email: 'kubzej8@gmail.com',
        from_name: formData.name,
        from_email: formData.email || 'noreply@wedding.com',
        phone: formData.phone || 'Neuvedeno',
        attendance:
          formData.attendance === 'yes'
            ? 'Ano, s radostí přijdu'
            : 'Ne, bohužel se nemohu zúčastnit',
        guests: formData.guests || '0',
        children: formData.children || '0',
        dietary_restrictions: formData.dietaryRestrictions || 'Žádné',
        pre_wedding_event: formData.preWeddingEvent ? 'Ano' : 'Ne',
        accommodation: formData.accommodation ? 'Ano' : 'Ne',
        message: formData.message || 'Žádný vzkaz',
      };

      await emailjs.send(serviceId, templateId, emailParams, publicKey);

      toast({
        title: 'RSVP odesláno',
        description: 'Děkujeme za vaši odpověď!',
      });
      onSubmit(); // Notify parent of successful submission
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      toast({
        title: 'Chyba',
        description: 'Nepodařilo se odeslat RSVP. Zkuste to prosím znovu.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-4">
        <div>
          <Label
            htmlFor="name"
            className="text-sm font-semibold text-gray-900 font-bodoni-moda"
          >
            Jméno a příjmení
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-2 bg-white font-bodoni-moda"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4 ">
          <div>
            <Label
              htmlFor="email"
              className="text-sm font-semibold text-gray-900 font-bodoni-moda"
            >
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 bg-white font-bodoni-moda"
              placeholder="Nepovinné"
            />
          </div>

          <div>
            <Label
              htmlFor="phone"
              className="text-sm font-semibold text-gray-900 font-bodoni-moda"
            >
              Telefon
            </Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 bg-white font-bodoni-moda"
              placeholder="Nepovinné"
            />
          </div>
        </div>

        <div>
          <Label className="text-sm font-semibold text-gray-900 font-bodoni-moda">
            Zúčastníte se?
          </Label>
          <RadioGroup
            value={formData.attendance}
            onValueChange={handleRadioChange}
            className="flex flex-col space-y-2 mt-2 font-bodoni-moda"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" className="text-gray-900" />
              <Label
                htmlFor="yes"
                className="text-sm text-gray-700 font-normal font-bodoni-moda"
              >
                Ano, s radostí přijdu
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" className="text-gray-900" />
              <Label
                htmlFor="no"
                className="text-sm text-gray-700 font-normal font-bodoni-moda"
              >
                Ne, bohužel se nemohu zúčastnit
              </Label>
            </div>
          </RadioGroup>
        </div>

        {formData.attendance === 'yes' && (
          <>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label
                  htmlFor="guests"
                  className="text-sm font-semibold text-gray-900 font-bodoni-moda"
                >
                  Dospělí
                </Label>
                <Input
                  id="guests"
                  name="guests"
                  type="number"
                  min="0"
                  value={formData.guests}
                  onChange={handleChange}
                  placeholder="0"
                  className="mt-2 bg-white font-bodoni-moda"
                />
              </div>

              <div>
                <Label
                  htmlFor="children"
                  className="text-sm font-semibold text-gray-900 font-bodoni-moda"
                >
                  Děti
                </Label>
                <Input
                  id="children"
                  name="children"
                  type="number"
                  min="0"
                  value={formData.children}
                  onChange={handleChange}
                  placeholder="0"
                  className="mt-2 bg-white font-bodoni-moda"
                />
              </div>
            </div>

            <div>
              <Label
                htmlFor="dietaryRestrictions"
                className="text-sm font-semibold text-gray-900 font-bodoni-moda"
              >
                Stravovací omezení
              </Label>
              <Textarea
                id="dietaryRestrictions"
                name="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={handleChange}
                placeholder="Vegetariánská strava, alergie, apod."
                className="mt-2 bg-white font-bodoni-moda"
              />
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="preWeddingEvent"
                  checked={formData.preWeddingEvent}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      preWeddingEvent: e.target.checked,
                    }))
                  }
                  className="h-4 w-4 mt-0.5 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                />
                <Label
                  htmlFor="preWeddingEvent"
                  className="text-sm text-gray-700 font-normal leading-tight font-bodoni-moda"
                >
                  Zúčastním se předsvatebního setkání (29. května)
                </Label>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="accommodation"
                  checked={formData.accommodation}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      accommodation: e.target.checked,
                    }))
                  }
                  className="h-4 w-4 mt-0.5 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                />
                <Label
                  htmlFor="accommodation"
                  className="text-sm text-gray-700 font-normal leading-tight font-bodoni-moda"
                >
                  Mám zájem o ubytování přímo na Smrčinách
                </Label>
              </div>
            </div>
          </>
        )}

        <div>
          <Label
            htmlFor="message"
            className="text-sm font-semibold text-gray-900 font-bodoni-moda"
          >
            Vzkaz pro novomanžele
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Nepovinné"
            className="mt-2 bg-white font-bodoni-moda"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-gray-900 hover:bg-black text-white font-semibold font-bodoni-moda"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Odesílání...' : 'Odeslat RSVP'}
      </Button>
    </form>
  );
}
