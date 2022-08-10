import JordanStayLoyal from '../../Assets/Jordan-1.jpeg';
import JordanAirJordan1 from '../../Assets/Jordan-2.jpeg';
import NikeAirForce1Shadow from '../../Assets/Nike-3.jpeg';
import { TbDots } from 'react-icons/tb';

export const Products = [
  {
    id: 1,
    name: "Jordan Stay Loyal",
    image: JordanStayLoyal,
    sold: "321 Pcs",
    price: "$8,500",
    status: "In Stock",
    action: <TbDots />
  },
  {
    id: 2,
    name: "Jordan Air Jordan 1",
    image: JordanAirJordan1,
    sold: "563 Pcs",
    price: "$12,000",
    status: "In Stock",
    action: <TbDots />
  },
  {
    id: 3,
    name: "Nike Air Force 1 Shadow",
    image: NikeAirForce1Shadow,
    sold: "462 Pcs",
    price: "$10,330",
    status: "Out oF Stock",
    action: <TbDots />
  },
]