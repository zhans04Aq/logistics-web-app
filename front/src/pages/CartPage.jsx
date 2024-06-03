/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useAuth } from '../services/AuthContext';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { HiOutlineTrash } from "react-icons/hi";

const OrderComponent = ({ orders, fetchOrders }) => {

    const deleteOrder = async (orderId) => {
        try {
            await axios.delete(`https://logisticback.onrender.com/api/v1/orders/${orderId}`);
            fetchOrders();            
        } catch (error) {
            console.error('Ошибка при удалении заказа:', error);
        }
    }

    return (
        <div className="flex flex-wrap items-center justify-center p-2 gap-4">
            {orders.map(order => (
                <div key={order.id} className="border pb-4 mb-4 px-2 py-4 flex flex-col">
                    <div>
                        <p><strong>Начальная точка:</strong> {order.startLocation}</p>
                        <p><strong>Конечная точка:</strong> {order.endLocation}</p>
                        <p><strong>Дата заказа:</strong> {order.orderDate}</p>
                        <p><strong>Статус заказа:</strong> {order.orderStatus}</p>
                        <p><strong>Количество:</strong> {order.quantity}</p>
                    </div>
                    <HiOutlineTrash className='self-end cursor-pointer' size={25} onClick={() => deleteOrder(order.id)} />
                </div>
            ))}
        </div>
    );
};

const ProductComponent = ({ products, fetchProducts }) => {

    const deleteProduct = async (productId) => {
        try {
            await axios.delete(`https://logisticback.onrender.com/api/v1/products/${productId}`);
            fetchProducts();
        } catch (error) {
            console.error('Ошибка при удалении продукта:', error);
        }
    }

    return (
        <div className="flex flex-wrap items-center justify-center p-2 gap-2">
            {products.map(product => (
                <div key={product.id} className="border pb-4 mb-4 px-2 py-4 flex flex-col">
                    <div>
                        <p><strong>Название продукта:</strong> {product.productName}</p>
                        <p><strong>Дата начала:</strong> {product.startDate}</p>
                        <p><strong>Дата окончания:</strong> {product.expirationDate}</p>
                        <p><strong>Количество:</strong> {product.quantity}</p>
                        <p><strong>Адрес:</strong> {product.warehouse.warehouseAddress}</p>
                        <p><strong>Склад:</strong> {product.warehouse.warehouseName}</p>
                    </div>
                    <HiOutlineTrash className='self-end cursor-pointer' size={25} onClick={() => deleteProduct(product.id)} />
                </div>
            ))}
        </div>
    );
};

function CartPage() {

    const { userId } = useAuth();
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchOrders = async () => {
        try {
            const response = await axios.get(`https://logisticback.onrender.com/api/v1/orders/${userId}`);
            setOrders(response.data.body);
        } catch (error) {
            console.error('Ошибка при загрузке заказов:', error);
        }
    };

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`https://logisticback.onrender.com/api/v1/products/${userId}`);
            setProducts(response.data.body);            
        } catch (error) {
            console.error('Ошибка при загрузке продуктов:', error);
        }
    };

    useEffect(() => {
        if (userId) {
            fetchOrders();
            fetchProducts();
            setLoading(false);
        }
    }, [userId]);

    if (loading) {
        return <div className="text-center py-10">Загрузка...</div>;
    }

    const hasOrders = orders.length > 0;
    const hasProducts = products.length > 0;

    return (
        <div className='min-h-1/2 w-full origin-top lg:origin-right bg-white border-2 px-2 py-4 z-50'>
            <div className='flex justify-around lg:w-6/7 w-full gap-x-3 items-start mx-auto flex-col md:flex-row'>
                {hasOrders || hasProducts ? (
                    <>
                        <div className='lg:w-1/2 w-full'>
                            <h2 className="text-2xl font-bold mb-4 text-center">Доставки</h2>
                            <div>
                                <OrderComponent orders={orders} fetchOrders={fetchOrders} />
                            </div>
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <h2 className="text-2xl font-bold mb-4 text-center">Хранение</h2>
                            <div>
                                <ProductComponent products={products} fetchProducts={fetchProducts} />
                            </div>
                        </div>
                    </>
                ) : (
                    <div>
                        <p>Корзина пуста</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CartPage;
