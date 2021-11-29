import { Component, Input, OnInit } from '@angular/core';
import { GameInstance } from '../_models/gameInstance';
import { GameService } from '../_services/game.service';

@Component({
  selector: 'app-clicker-area',
  templateUrl: './clicker-area.component.html',
  styleUrls: ['./clicker-area.component.css']
})
export class ClickerAreaComponent implements OnInit {
  gameInstance: GameInstance;

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.gameInstance = this.gameService.getInstance();
  }

  incrementCounter($event) {
    this.gameService.incrementElementsCount();
    this.animate($event);
    this.playAudio()
  }
  playAudio(){
    let audio = new Audio();
    audio.src = "../assets/audio/coin.mp3";
    audio.currentTime = .1;
    audio.load();
    audio.play();
  }

  animate($event) {
    if ($event.clientX === 0 && $event.clientY === 0) {
      const bbox = document.querySelector('.element').getBoundingClientRect();
      const x = bbox.left + bbox.width / 2;
      const y = bbox.top + bbox.height / 2;
      this.createParticle(x, y);
    } else {
      this.createParticle($event.clientX, $event.clientY);
    }
  }

  createParticle(x, y) {
    const particle = document.createElement('particle');
    document.body.appendChild(particle);

    // Define the size of the particle.
    const size = 15;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Generate a random color in a blue/purple palette
    particle.style.color = "#FFF";
    particle.style.fontWeight = "bold";
    particle.innerHTML = '+1';

    // Generate a random x & y destination within a distance of 50px from the mouse
    const destinationX = x + (Math.random() - 0.5) * 2 * 100;
    const destinationY = y + (Math.random() - 2) * 2 * 100;

    // Store the animation in a variable as we will need it later
    const animation = particle.animate([
      {
        // Set the origin position of the particle
        // We offset the particle with half its size to center it around the mouse
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
        opacity: 1
      },
      {
        // We define the final coordinates as the second keyframe
        transform: `translate(${destinationX}px, ${destinationY}px)`,
        opacity: 0
      }
    ], {
      // Set a random duration from 500 to 1500ms
      duration: 2500,
      easing: 'cubic-bezier(0, .9, .57, 1)',
      // Delay every particle with a random value of 200ms
    });

    // When the animation is complete, remove the element from the DOM
    animation.onfinish = () => {
      particle.remove();
    };
  }
}
