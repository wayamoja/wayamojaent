import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Consultation Scheduled",
      description: "We'll contact you shortly to confirm your consultation.",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-blue-50 border-blue-200">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-blue-900">Schedule a Consultation</DialogTitle>
            <DialogDescription className="text-blue-700">
              Fill out the form below and we'll get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-blue-900">
                Name
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border-blue-200 focus:border-blue-400"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-blue-900">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border-blue-200 focus:border-blue-400"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-blue-900">
                Phone
              </label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="border-blue-200 focus:border-blue-400"
                required
              />
            </div>
            <div>
              <label htmlFor="preferredDate" className="block text-sm font-medium text-blue-900">
                Preferred Date
              </label>
              <Input
                id="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="border-blue-200 focus:border-blue-400"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-blue-900">
                Message
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your needs..."
                className="h-24 border-blue-200 focus:border-blue-400"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <Button variant="outline" onClick={onClose} className="border-blue-500 text-blue-500">
                Cancel
              </Button>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                Schedule
              </Button>
            </div>
          </form>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}