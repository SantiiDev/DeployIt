import React from 'react';
import { motion } from 'framer-motion';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

const Typewriter = ({ text }: { text: string }) => {
	const words = text.split(" ");
	return (
		<p>
			{words.map((word, i) => (
				<motion.span
					key={i}
					initial={{ opacity: 0, filter: "blur(4px)", y: 2 }}
					animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
					transition={{ duration: 0.3, delay: i * 0.04 }}
					style={{ display: "inline-block", marginRight: "0.25em" }}
				>
					{word}
				</motion.span>
			))}
		</p>
	);
};

export function FaqsSection() {
	return (
		<div className="w-full space-y-10">
			<div className="space-y-4 text-center">
				<div className="flex justify-center">
					<div className="border border-border text-foreground font-medium py-1 px-4 rounded-full text-sm">FAQ's</div>
				</div>
				<h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl relative z-10">Preguntas Frecuentes</h2>
				<p className="text-muted-foreground max-w-2xl mx-auto text-lg">
					Todo lo que necesitas saber sobre nuestro proceso y precios.
					¿No encuentras una respuesta? No dudes en escribirnos.
				</p>
			</div>
			<Accordion
				type="single"
				collapsible
				className="w-full space-y-4"
				defaultValue="item-1"
			>
				{questions.map((item) => (
					<AccordionItem
						value={item.id}
						key={item.id}
						className="relative border-b border-border/40 data-[state=open]:border data-[state=open]:border-white/20 data-[state=open]:rounded-md transition-all duration-300"
					>
						<AccordionTrigger className="px-5 py-5 text-base font-medium hover:no-underline text-left">
							{item.title}
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground pb-5 px-5 pt-2">
							<Typewriter text={item.content} />
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
			<p className="text-muted-foreground">
				¿Todavía tienes preguntas? Escríbenos a{' '}
				<a href="mailto:teamdeployit@gmail.com" className="text-primary hover:underline font-medium">
					teamdeployit@gmail.com
				</a>
			</p>
		</div>
	);
}

const questions = [
	{
		id: 'item-1',
		title: '¿Cuánto tiempo lleva un proyecto?',
		content: 'Las landing pages suelen tardar 2-4 semanas. Las aplicaciones web complejas o plataformas de e-commerce varían entre 6-12 semanas dependiendo del alcance.',
	},
	{
		id: 'item-2',
		title: '¿Ofrecen mantenimiento?',
		content: 'Sí. Ofrecemos retainers mensuales para manejar actualizaciones, seguridad, monitoreo de rendimiento y adición de mejoras menores.',
	},
	{
		id: 'item-3',
		title: '¿Incluyen el diseño web?',
		content: 'Sí. Gestionamos el ciclo completo—desde wireframes y UI de alta fidelidad en Figma hasta el despliegue full-stack en producción.',
	},
	{
		id: 'item-4',
		title: '¿Pueden arreglar mi sitio web actual?',
		content: 'Nos especializamos en refactorizar sitios lentos y heredados en aplicaciones web modernas de alto rendimiento para maximizar el SEO y las Core Web Vitals.',
	},
	{
		id: 'item-5',
		title: '¿Cómo empezamos?',
		content: 'Haz clic en "Comenzar Proyecto" para reservar una llamada de descubrimiento. Evaluaremos tus requerimientos y veremos si hacemos buena sinergia.',
	},
];
