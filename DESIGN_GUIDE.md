# Sankofa Design & Animation Guide

## Animation Strategy
We use **Framer Motion** for all interactive and entrance animations. This ensures a consistent, high-end feel across the platform.

### Core Principles
1. **Entrance Animations**: Use `initial={{ opacity: 0, y: 20 }}` and `whileInView={{ opacity: 1, y: 0 }}` for sections.
2. **Staggering**: When displaying lists or grids (like cards), use variants and `staggerChildren` to create a rhythmic flow.
3. **Interactive Feedback**: All buttons and interactive elements should have subtle hover and tap effects (e.g., `whileHover={{ scale: 1.05 }}` and `whileTap={{ scale: 0.95 }}`).
4. **Spring Physics**: Favor `type: "spring"` over `type: "tween"` for UI transitions to make them feel more organic and responsive.

### Example: Section Entrance
```tsx
<motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  {/* Content */}
</motion.section>
```

### Example: Staggered Grid
```tsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 }
};

return (
  <motion.div variants={container} initial="hidden" animate="show">
    {items.map(i => <motion.div key={i.id} variants={item} />)}
  </motion.div>
);
```
