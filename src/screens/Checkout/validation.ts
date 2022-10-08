import * as zod from 'zod'

export const AddressFormSchema = zod.object({
  postalCode: zod
    .string()
    .min(7, 'O CEP deve possuir 7 dígitos')
    .max(8, 'O CEP deve possuir 7 dígitos'),
  street: zod.string().max(50),
  number: zod.string().max(5),
  complement: zod.string(),
  neighborhood: zod.string().min(3),
  city: zod.string().min(3),
  state: zod.string().min(2).max(2),
})

export type AddressFormData = zod.infer<typeof AddressFormSchema>
