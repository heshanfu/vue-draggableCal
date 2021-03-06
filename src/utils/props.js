export default {
  lang: {
    type: String,
    enum: ['EN', 'FR'],
    default: 'EN',
  },
  days: {
    type: Number,
    default: 365,
  },
  months: {
    type: Number,
    default: 12,
  },
  prepended: {
    type: Number,
    default: 1,
  },
  selected: {
    type: Object,
    default: null,
  },
  fullMonths: {
    type: Boolean,
    default: false,
  },
};
