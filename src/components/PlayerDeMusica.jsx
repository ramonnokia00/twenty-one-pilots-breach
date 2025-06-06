import { useEffect, useRef } from "react";
import music1 from "../assets/OdeToSleep.mp3";

const Player = () => {
    const audioRef = useRef(null);
    const playBtnRef = useRef(null);
    const progressRef = useRef(null);
    const currentRef = useRef(null);

    useEffect(() => {
        const player = audioRef.current;
        const playBtn = playBtnRef.current;
        const progress = progressRef.current;
        const current = currentRef.current;

        const formatarTempo = (tempo) => {
            let minutos = Math.floor(tempo / 60);
            let segundos = Math.floor(tempo % 60);
            if (segundos < 10) segundos = "0" + segundos;
            return `${minutos}:${segundos}`;
        };

        const alternarPlayPause = () => {
            if (player.paused) {
                player.play();
            } else {
                player.pause();
            }
        };

        const atualizarProgresso = () => {
            const tempoAtual = player.currentTime;
            const duracao = player.duration;
            const progresso = Math.floor((tempoAtual * 100) / duracao);
            if (progress) {
                progress.style.setProperty("--progress", `${progresso}%`);
            }
            if (current) {
                current.innerHTML = formatarTempo(tempoAtual);
            }
        };

        const atualizarIcone = () => {
            if (player.paused) {
                playBtn.setAttribute("name", "play");
            } else {
                playBtn.setAttribute("name", "pause");
            }
        };

        playBtn.addEventListener("click", alternarPlayPause);
        player.addEventListener("play", atualizarIcone);
        player.addEventListener("pause", atualizarIcone);
        player.addEventListener("timeupdate", atualizarProgresso);

        return () => {
            playBtn.removeEventListener("click", alternarPlayPause);
            player.removeEventListener("play", atualizarIcone);
            player.removeEventListener("pause", atualizarIcone);
            player.removeEventListener("timeupdate", atualizarProgresso);
        };
    }, []);

    return (
        <div className="flex justify-center bg-azul-vessel text-white rounded-[64px] py-2 items-center">
            <audio
                ref={audioRef}
                src={music1}
                className="gap-[16px] pl-[8px] pt-[24px] relative rounded-[64px]"
            ></audio>
            <div className="flex gap-[22px]">
                <div>
                    <box-icon
                        name="play"
                        class="fill-white cursor-pointer"
                        id="playerbtn"
                        ref={playBtnRef}
                    />
                </div>
                <div>
                    Ode To Sleep - Vessel
                    <div id="bar">
                        <div
                            id="progress"
                            ref={progressRef}
                            className="h-1 w-full bg-gray-700 rounded"
                            style={{
                                background:
                                    "linear-gradient(to right, white var(--progress, 0%), #333 var(--progress, 0%))",
                            }}
                        ></div>
                    </div>
                </div>
                <div id="current" ref={currentRef}>
                    0:00
                </div>
            </div>
        </div>
    );
};

export default Player;
