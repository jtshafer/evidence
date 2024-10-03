import { tv } from 'tailwind-variants';
import Root from './button.svelte';

const buttonVariants = tv({
	base: 'inline-flex items-center justify-center rounded-md text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 disabled:pointer-events-none disabled:opacity-50',
	variants: {
		variant: {
			default: 'bg-base-content text-white shadow hover:bg-base-content/90',
			destructive: 'bg-red-500 text-red-50 shadow-sm hover:bg-red-500/90',
			outline:
				'border border-input bg-transparent shadow-sm hover:bg-gray-100 hover:text-base-content',
			secondary: 'bg-gray-100 text-base-content shadow-sm hover:bg-gray-100/80',
			ghost: 'hover:bg-gray-100 hover:text-base-content',
			link: 'text-base-content underline-offset-4 hover:underline'
		},
		size: {
			default: 'h-9 px-4 py-2',
			sm: 'h-8 rounded-md px-3 text-xs',
			lg: 'h-10 rounded-md px-8',
			icon: 'h-9 w-9'
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
});

/**
 * @typedef {'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'} Variant
 * @typedef {'default' | 'sm' | 'lg' | 'icon'} Size
 */

/**
 * @property {Variant} [variant]
 * @property {Size} [size]
 */

export { Root, Root as Button, buttonVariants };
