import { axiosInstance } from './instance';
import { CartDTO, CreateCartItemValue } from './dto/cart.dto';

export const getCart = async (): Promise<CartDTO> => {
    return (await axiosInstance.get<CartDTO> ("/cart")).data
};

export const updateItemQuantity = async (itemId: number, quantity: number): Promise<CartDTO> => {
    return (await axiosInstance.patch<CartDTO>("/cart/" + itemId, {quantity})).data
}

export const deleteCartItem = async (itemId: number): Promise<CartDTO> => {
    return (await axiosInstance.delete<CartDTO>("/cart/" + itemId)).data
}

export const addCartItem = async (values: CreateCartItemValue): Promise<CartDTO> => {
    return (await axiosInstance.post<CartDTO>("/cart", values)).data
}