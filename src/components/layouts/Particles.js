import React from "react";
import Particles from "react-particles-js";
import { background } from "../../profile";

const ParticlesBackground = () => {
	return (
		<div className="particle">
			{background.type === "Snow" && (
				<Particles
					height="100vh"
					width="100%"
					params={{
						particles: {
							number: {
								value: 77,
								density: {
									enable: true,
									value_area: 641.3493991357814,
								},
							},
							color: {
								value: "#000000",
							},
							size: {
								value: 4,
								random: true,
							},
							move: {
								direction: "bottom",
								out_mode: "out",
							},
							line_linked: {
								enable: false,
							},
						},
						interactivity: {
							events: {
								onclick: {
									enable: true,
									mode: "remove",
								},
							},
							modes: {
								remove: {
									particles_nb: 5,
								},
							},
						},
					}}
				/>
			)}
			{background.type === "Particle" && (
				<Particles
					height="100vh"
					width="100vw"
					params={{
						particles: {
							collisions: {
								enable: true,
							},
							number: {
								value: 75,
								density: {
									enable: true,
									value_area: 641.3493991357814,
								},
							},
							color: {
								value: "#ffffff",
							},
							size: {
								value: 3,
								random: true,
								anim: {
									enable: false,
									speed: 40,
									size_min: 0.1,
									sync: false,
								},
							},
							line_linked: {
								enable: true,
								color: "#000",
								opacity: 0.5,
								width: 1.5,
							},
							move: {
								enable: true,
								speed: 3,
								direction: "none",
								random: false,
								straight: false,
								out_mode: "out",
								bounce: true,
								attract: { enable: false, rotateX: 600, rotateY: 1200 },
							},
						},
						interactivity: {
							detect_on: "canvas",
							events: {
								onhover: {
									enable: true,
									mode: "repulse",
								},
								onclick: {
									enable: true,
									mode: "push",
								},
								resize: true,
							},
							modes: {
								bubble: {
									grab: { distance: 250, line_linked: { opacity: 5 } },
									bubble: {
										distance: 250,
										size: 50,
										duration: 2,
										opacity: 8,
										speed: 3,
									},
									repulse: { distance: 150, duration: 0.4 },
									push: { particles_nb: 4 },
									remove: { particles_nb: 2 },
								},
								push: {
									particles_nb: 10,
								},
							},
							retina_detect: true,
						},
					}}
				/>
			)}
		</div>
	);
};

export default ParticlesBackground;
