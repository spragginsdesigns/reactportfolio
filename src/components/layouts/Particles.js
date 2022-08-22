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
								value: 200,
								density: {
									enable: true,
									value_area: 500,
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
								value: 100,
								density: {
									enable: false,
								},
							},
							color: "#000",
							size: {
								value: 3,
								random: true,
								anim: {
									speed: 5,
									size_min: 0.8,
								},
							},
							line_linked: {
								enable: true,
								color: "#000",
							},
							move: {
								enable: true,
								speed: 2,
								direction: "none",
								random: false,
								straight: false,
								out_mode: "out",
								bounce: true,
								attract: { enable: false, rotateX: 600, rotateY: 1200 },
							},
						},
						interactivity: {
							events: {
								onhover: {
									enable: true,
									mode: "repulse",
								},
								onclick: {
									enable: true,
									mode: "push",
								},
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
