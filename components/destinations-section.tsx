"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const destinations = [
	{
		name: "Kashmir",
		description:
			"Nestled in the Himalayas, Kashmir boasts stunning valleys and lakes, with a rich cultural heritage. Experience the serene beauty of Dal Lake, explore the Mughal gardens, and witness the snow-capped peaks that make this paradise on earth truly unforgettable.",
		image: "/destinations/kashmir.jpg",
	},
	{
		name: "Rajasthan",
		description:
			"A land of royal palaces, desert landscapes, and colorful markets, offering a captivating blend of history, culture, and architectural wonders in cities like Jaipur, Udaipur, and Jaisalmer. Discover the golden sands of the Thar Desert and majestic forts.",
		image: "/destinations/rajasthan.jpg",
	},
	{
		name: "Kerala",
		description:
			"Known as 'God's Own Country,' Kerala enchants visitors with lush backwaters, serene beaches, and abundant greenery—perfect for a tranquil and rejuvenating escape. Cruise through the backwaters and experience Ayurvedic wellness traditions.",
		image: "/destinations/kerala.jpg",
	},
	{
		name: "Himachal Pradesh",
		description:
			"Famed for its snow-capped mountains, pine forests, and adventure hubs like Manali and Shimla, ideal for trekking, nature walks, and scenic retreats. Discover pristine valleys and experience the thrill of mountain adventures.",
		image: "/destinations/himachal-pradesh.jpg",
	},
	{
		name: "Goa",
		description:
			"Famed for its sun-kissed beaches, vibrant nightlife, and laid-back coastal vibe, a favorite for relaxation, water sports, and lively festivals. Experience the perfect blend of Portuguese heritage and tropical paradise.",
		image: "/destinations/goa.jpg",
	},
	{
		name: "Uttarakhand",
		description:
			"Home to the Himalayas, spiritual towns, and adventure sports, offering breathtaking views, trekking trails, and peaceful hill stations like Nainital and Mussoorie. Discover the source of the Ganges and experience spiritual awakening.",
		image: "/destinations/Uttarakhand.jpg",
	},
	{
		name: "Meghalaya",
		description:
			"Known for its dense rainforests and living root bridges, with tribal culture thriving through unique customs, music, and traditional crafts. Explore the wettest place on earth and witness nature's incredible engineering.",
		image: "/destinations/Meghalaya.jpg",
	},
	{
		name: "Assam",
		description:
			"Lush forests and the mighty Brahmaputra River define Assam's rich natural environment, while diverse ethnic communities celebrate vibrant folk traditions and festivals. Experience the world's finest tea gardens and spot the one-horned rhinoceros.",
		image: "/destinations/assam.jpeg",
	},
];

export default function DestinationsSection() {
	const ref = useRef<HTMLElement>(null);
	const isInView = useInView(ref, { once: true, amount: 0.1 });	const [currentIndex, setCurrentIndex] = useState(0);
	const [isPlaying, setIsPlaying] = useState(true);
	// Auto-slide functionality
	useEffect(() => {
		if (!isPlaying) return;

		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % destinations.length);
		}, 5000); // 5 seconds per slide

		return () => clearInterval(interval);
	}, [isPlaying]);

	const goToNext = () => {
		setCurrentIndex((prev) => (prev + 1) % destinations.length);
	};

	const goToPrev = () => {
		setCurrentIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
	};

	const togglePlayPause = () => {
		setIsPlaying(!isPlaying);
	};

	return (
		<section 
			id="destinations" 
			ref={ref} 
			className="relative h-screen w-full overflow-hidden"
		>
			{/* Background Slides */}
			{destinations.map((destination, index) => (
				<motion.div
					key={index}
					className="absolute inset-0 w-full h-full"
					initial={{ opacity: 0, scale: 1.1 }}
					animate={{ 
						opacity: index === currentIndex ? 1 : 0,
						scale: index === currentIndex ? 1 : 1.1,
					}}
					transition={{ 
						duration: 1.2, 
						ease: [0.25, 0.1, 0.25, 1]
					}}
				>
					{/* Background Image */}
					<div className="absolute inset-0">
						<Image
							src={destination.image}
							alt={destination.name}
							fill
							className="object-cover"
							priority={index === 0}
							quality={90}
						/>
						{/* Gradient Overlay */}
						<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
					</div>

					{/* Content */}
					<div className="relative z-10 h-full flex items-center">
						<div className="container mx-auto px-6 md:px-12">
							<div className="max-w-2xl">
								<motion.div
									initial={{ opacity: 0, y: 50 }}
									animate={{ 
										opacity: index === currentIndex ? 1 : 0,
										y: index === currentIndex ? 0 : 50,
									}}
									transition={{ 
										duration: 0.8, 
										delay: index === currentIndex ? 0.3 : 0,
										ease: "easeOut"
									}}
								>
									{/* Destination Badge */}
									<div className="inline-block mb-6">
										<span className="text-sm font-semibold text-white/80 tracking-wider uppercase bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
											Destination {String(index + 1).padStart(2, '0')}
										</span>
									</div>

									{/* Title */}
									<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
										{destination.name}
									</h1>

									{/* Description */}
									<p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-xl">
										{destination.description}
									</p>

									{/* CTA Button */}
									<Button
										size="lg"
										className="bg-white text-black hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
									>
										Explore {destination.name}
									</Button>
								</motion.div>
							</div>
						</div>
					</div>
				</motion.div>
			))}

			{/* Navigation Controls */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
				<div className="flex items-center space-x-6 bg-white/10 backdrop-blur-md rounded-full px-6 py-4 border border-white/20">
					{/* Previous Button */}
					<Button
						variant="ghost"
						size="sm"
						onClick={goToPrev}
						className="text-white hover:bg-white/20 rounded-full p-3 transition-all duration-300"
					>
						<ChevronLeft className="w-6 h-6" />
					</Button>

					{/* Play/Pause Button */}
					<Button
						variant="ghost"
						size="sm"
						onClick={togglePlayPause}
						className="text-white hover:bg-white/20 rounded-full p-3 transition-all duration-300"
					>
						{isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
					</Button>

					{/* Next Button */}
					<Button
						variant="ghost"
						size="sm"
						onClick={goToNext}
						className="text-white hover:bg-white/20 rounded-full p-3 transition-all duration-300"
					>
						<ChevronRight className="w-6 h-6" />
					</Button>
				</div>
			</div>

			{/* Slide Indicators */}
			<div className="absolute bottom-8 right-8 z-20">
				<div className="flex flex-col space-y-2">
					{destinations.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentIndex(index)}
							className={`w-3 h-3 rounded-full transition-all duration-300 ${
								index === currentIndex 
									? 'bg-white scale-125' 
									: 'bg-white/40 hover:bg-white/60'
							}`}
						/>
					))}
				</div>
			</div>			{/* Progress Bar */}
			{isPlaying && (
				<div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
					<motion.div
						className="h-full bg-white"
						initial={{ width: "0%" }}
						animate={{ width: "100%" }}
						transition={{ duration: 5, ease: "linear" }}
						key={currentIndex}
					/>
				</div>
			)}

			{/* Section Title (Top Left) */}
			<div className="absolute top-8 left-8 z-20">
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					<h2 className="text-2xl md:text-3xl font-bold text-white/90">
						Premium Destinations
					</h2>
					<p className="text-white/70 text-sm mt-1">
						Discover breathtaking locations
					</p>
				</motion.div>
			</div>
		</section>
	);
}
