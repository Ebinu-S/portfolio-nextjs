import { useRouter } from 'next/router';
import Layout from '../components/layout';
import '../styles/globals.css';
import { motion, AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	return (
		<Layout>
			<AnimatePresence mode='wait' key={router.route}>
				<motion.div
					initial='initialState'
					animate='animateState'
					exit='exitState'
					variants={{
						initialState: {
							opacity: 0,
						},
						animateState: {
							opacity: 1,
						},
						exitState: {
							opacity: 0,
						},
					}}
					transition={{
						duration: 1,
					}}>
					<Component {...pageProps} />
				</motion.div>
			</AnimatePresence>
		</Layout>
	);
}

export default MyApp;
