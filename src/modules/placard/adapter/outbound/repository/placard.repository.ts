import { IPlacardRepository } from '@/modules/placard/application/port/placard.repository.port'
import { IPlacard } from '@/modules/placard/domain/model/placard.model'
import { PlacardEntityMapper } from '../mapper/placard.mapper'
import {
    axiosWithAuth,
    axiosWithXApiKey,
} from '@/sections/shared/utils/fetchRule.utils'

export class PlacardRepository implements IPlacardRepository {
    async getList(): Promise<IPlacard[]> {
        try {
            const response = await axiosWithXApiKey.get(`/placard/find/list`)

            return PlacardEntityMapper.toDomainList(response.data)
        } catch (error) {
            console.error('Error PlacardRepository.getList : ', error)
            throw error
        }
    }
    async getListByUserId(userId: string): Promise<IPlacard[]> {
        try {
            const response = await axiosWithAuth.get(
                `/placard/find/list/${userId}`,
            )

            return PlacardEntityMapper.toDomainList(response.data)
        } catch (error) {
            console.error('Error PlacardRepository.getListByUserId : ', error)
            throw error
        }
    }

    async getByPlacardId(id: string): Promise<IPlacard> {
        try {
            const response = await axiosWithXApiKey.get(`/placard/find/${id}`)

            return PlacardEntityMapper.toDomain(response.data)
        } catch (error) {
            console.error('Error PlacardRepository.getByPlacardId : ', error)
            throw error
        }
    }
    async save(formValue: IPlacard): Promise<boolean> {
        try {
            await axiosWithAuth.post(`/placard/save`, formValue)

            return true
        } catch (error) {
            console.error('Error PlacardRepository.save : ', error)
            throw error
        }
    }
    async delete(id: string): Promise<boolean> {
        try {
            return await axiosWithAuth.post(`/placard/delete`, {
                id,
            })
        } catch (error) {
            console.error('Error PlacardRepository.delete : ', error)
            throw error
        }
    }
}
