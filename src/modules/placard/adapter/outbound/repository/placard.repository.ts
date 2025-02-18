import { IPlacardRepository } from '@/modules/placard/application/port/placard.repository.port'
import { IPlacard } from '@/modules/placard/domain/model/placard.model'
import axios from 'axios'
import { PlacardEntityMapper } from '../mapper/placard.mapper'

export class PlacardRepository implements IPlacardRepository {
    async getAll(): Promise<IPlacard[]> {
        try {
            const response = await axios.get(
                'http://localhost:8000/placard/find-all',
            )

            return PlacardEntityMapper.toDomainList(response.data)
        } catch (error) {
            console.error('Error PlacardRepository.getAll')
            throw error
        }
    }

    async getByPlacardId(id: string): Promise<IPlacard> {
        try {
            const response = await axios.get(
                `http://localhost:8000/placard/find/${id}`,
            )

            return PlacardEntityMapper.toDomain(response.data)
        } catch (error) {
            console.error('Error PlacardRepository.getByPlacardId')
            throw error
        }
    }
}
