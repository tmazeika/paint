import type { NextPage } from 'next';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  /*const canvasRef = useRef<HTMLCanvasElement>(null);
  const activeLayerRef = useRef(new Layer());
  const stateRef = useRef<{
    pointerX: number,
    pointerY: number,
    pointerDown: boolean,
  }>({
    pointerX: 0,
    pointerY: 0,
    pointerDown: false,
  });*/

  /*useEffect(() => {
    const canvas = canvasRef.current;
    assert(canvas !== null);
    const width = inchesToPixels(8.5);
    const height = inchesToPixels(11);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const scale = window.devicePixelRatio;
    canvas.width = Math.floor(width * scale);
    canvas.height = Math.floor(height * scale);

    const ctx = canvas.getContext('2d');
    assert(ctx !== null);
    ctx.scale(scale, scale);

    const onFrame = () => {
      const canvas = canvasRef.current;
      assert(canvas !== null);
      const ctx = canvas.getContext('2d');
      assert(ctx !== null);
      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      ctx.strokeStyle = '#000';
      ctx.fillStyle = '#000';
      const points = activeLayerRef.current.points;
      if (points.length === 1) {
        const [x, y] = points[0];
        ctx.ellipse(x, y, 0.5, 0.5, 0, 0, 2 * Math.PI);
        ctx.fill();
      } else if (points.length === 2) {
        const [[x0, y0], [x1, y1]] = points;
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
        ctx.stroke();
      } else if (points.length > 2) {
        const [x0, y0] = points[0];
        ctx.moveTo(x0, y0);
        for (let i = 2; i < points.length; i++) {
          const [cpx, cpy] = points[i - 1];
          const [x1, y1] = points[i];
          const [mx, my] = [(x1 + cpx) / 2, (y1 + cpy) / 2];
          if (i === points.length - 1) {
            ctx.quadraticCurveTo(cpx, cpy, x1, y1);
          } else {
            ctx.quadraticCurveTo(cpx, cpy, mx, my);
          }
        }
        ctx.stroke();
      }
      requestAnimationFrame(onFrame);
    };
    requestAnimationFrame(onFrame);
  }, []);*/

  return (
    <Layout>
      {/*<canvas
        ref={canvasRef}
        className="mx-auto my-10 bg-white shadow-lg shadow-gray-900"
        onPointerDown={(e) => {
          const canvas = canvasRef.current;
          assert(canvas !== null);
          canvas.setPointerCapture(e.pointerId);
          stateRef.current.pointerDown = true;

          const { left, top } = canvas.getBoundingClientRect();
          const x = e.pageX - left;
          const y = e.pageY - top;
          stateRef.current.pointerX = x;
          stateRef.current.pointerY = y;
          if (stateRef.current.pointerDown) {
            activeLayerRef.current.addPoint(x, y);
          }
        }}
        onPointerUp={(e) => {
          const canvas = canvasRef.current;
          assert(canvas !== null);
          canvas.releasePointerCapture(e.pointerId);
          stateRef.current.pointerDown = false;
        }}
        onPointerMove={(e) => {
          const canvas = canvasRef.current;
          assert(canvas !== null);
          const { left, top } = canvas.getBoundingClientRect();
          const x = e.pageX - left;
          const y = e.pageY - top;
          stateRef.current.pointerX = x;
          stateRef.current.pointerY = y;
          if (stateRef.current.pointerDown) {
            activeLayerRef.current.addPoint(x, y);
          }
        }}
      />*/}
    </Layout>
  );
};

export default Home;

// const inchesToPixels = (inches: number) => inches * 96;
