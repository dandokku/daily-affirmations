export interface Affirmation {
  text: string;
  category: string;
}

export const affirmations: Affirmation[] = [
  // Confidence
  { text: "I am confident in my abilities and trust my decisions.", category: "confidence" },
  { text: "I radiate self-assurance and inner strength.", category: "confidence" },
  { text: "I believe in myself and my potential.", category: "confidence" },
  { text: "I am worthy of respect and admiration.", category: "confidence" },
  { text: "I embrace challenges as opportunities to grow.", category: "confidence" },
  { text: "My confidence grows stronger every day.", category: "confidence" },
  { text: "I trust my intuition and inner wisdom.", category: "confidence" },
  { text: "I am capable of achieving anything I set my mind to.", category: "confidence" },
  { text: "I speak up for myself with clarity and conviction.", category: "confidence" },
  { text: "I am proud of who I am becoming.", category: "confidence" },

  // Focus
  { text: "I am focused and present in the moment.", category: "focus" },
  { text: "My mind is clear and my thoughts are sharp.", category: "focus" },
  { text: "I concentrate on what matters most to me.", category: "focus" },
  { text: "I eliminate distractions and stay on track.", category: "focus" },
  { text: "I am disciplined in my daily routines.", category: "focus" },
  { text: "I prioritize my goals and take action.", category: "focus" },
  { text: "I maintain focus even in challenging situations.", category: "focus" },
  { text: "My attention is powerful and directed.", category: "focus" },
  { text: "I am committed to my vision and purpose.", category: "focus" },
  { text: "I stay focused on progress, not perfection.", category: "focus" },

  // Success
  { text: "I am successful in all areas of my life.", category: "success" },
  { text: "I attract opportunities that lead to success.", category: "success" },
  { text: "I am grateful for my achievements and growth.", category: "success" },
  { text: "I define success on my own terms.", category: "success" },
  { text: "I learn from setbacks and keep moving forward.", category: "success" },
  { text: "I am surrounded by supportive people.", category: "success" },
  { text: "My hard work is paying off.", category: "success" },
  { text: "I celebrate small wins along the way.", category: "success" },
  { text: "I am building a life I love.", category: "success" },
  { text: "Success flows to me naturally.", category: "success" },

  // Peace
  { text: "I am at peace with myself and my journey.", category: "peace" },
  { text: "I release what I cannot control.", category: "peace" },
  { text: "I choose calm over chaos.", category: "peace" },
  { text: "My mind is a sanctuary of peace.", category: "peace" },
  { text: "I breathe deeply and center myself.", category: "peace" },
  { text: "I forgive myself and others.", category: "peace" },
  { text: "I am grounded and stable.", category: "peace" },
  { text: "Peace surrounds me in every moment.", category: "peace" },
  { text: "I let go of worry and embrace serenity.", category: "peace" },
  { text: "I am content with where I am.", category: "peace" },

  // Discipline
  { text: "I am disciplined in my thoughts and actions.", category: "discipline" },
  { text: "I follow through on my commitments.", category: "discipline" },
  { text: "I build healthy habits that serve me.", category: "discipline" },
  { text: "I stay consistent even when motivation fades.", category: "discipline" },
  { text: "I respect my time and energy.", category: "discipline" },
  { text: "I set boundaries that protect my peace.", category: "discipline" },
  { text: "I am patient with my progress.", category: "discipline" },
  { text: "Discipline brings me freedom.", category: "discipline" },
  { text: "I choose actions that align with my values.", category: "discipline" },
  { text: "I am committed to my personal growth.", category: "discipline" },

  // Self-love
  { text: "I love and accept myself unconditionally.", category: "self-love" },
  { text: "I am kind to myself in all circumstances.", category: "self-love" },
  { text: "I honor my needs and feelings.", category: "self-love" },
  { text: "I am worthy of love and care.", category: "self-love" },
  { text: "I celebrate my unique qualities.", category: "self-love" },
  { text: "I treat myself with compassion.", category: "self-love" },
  { text: "I am enough just as I am.", category: "self-love" },
  { text: "I nurture my body, mind, and spirit.", category: "self-love" },
  { text: "I speak to myself with love and encouragement.", category: "self-love" },
  { text: "I am my own best friend.", category: "self-love" },
];

export const categories = ["all", "confidence", "focus", "success", "peace", "discipline", "self-love"];