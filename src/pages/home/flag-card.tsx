import { Link } from 'react-router-dom'

import { formatNumber } from '@/utils/formatNumber'

interface NativeNames {
  [key: string]: {
    common: string
    official: string
  }
}

interface Currency {
  name: string
  symbol: string
}

interface Languages {
  [key: string]: string
}

interface Idd {
  root: string
  suffixes: string[]
}

interface Car {
  signs: string[]
  side: string
}

interface CapitalInfo {
  latlng: number[]
}

interface Country {
  data: {
    name: {
      common: string
      official: string
      nativeName: NativeNames
    }
    map: string
    tld: string[]
    cca2: string
    ccn3: string
    cca3: string
    cioc: string
    independent: boolean
    status: string
    unMember: boolean
    currencies: {
      [key: string]: Currency
    }
    idd: Idd
    capital: string[]
    altSpellings: string[]
    region: string
    subregion: string
    languages: Languages
    translations: { [key: string]: string }
    latlng: number[]
    landlocked: boolean
    borders: string[]
    area: number
    demonyms: string[]
    flag: string
    population: number
    fifa: string
    car: Car
    timezones: string[]
    continents: string[]
    flags: { [png: string]: string }
    coatOfArms: string
    startOfWeek: string
    capitalInfo: CapitalInfo
    postalCode: string
  }
}

export function FlagCard({ data }: Country) {
  return (
    <Link to={`/details/${data.name.common}`}>
      <div className="  flex w-[300px] flex-col rounded-b-xl  rounded-t-xl bg-white shadow-lg dark:bg-gray-800">
        <img
          src={data.flags.png}
          alt={data.name.common}
          className="h-[170px] w-full rounded-t-xl object-cover"
        />
        <div className="h-[180px] p-5">
          <h2 className="mb-3 font-bold">{data.name.common}</h2>
          <p className="mb-1 font-light ">
            Population:{' '}
            <span className=" text-sm text-muted-foreground ">
              {formatNumber(data.population)}
            </span>
          </p>
          <p className="mb-1 font-light ">
            Region:{' '}
            <span className="text-sm text-muted-foreground">{data.region}</span>
          </p>
          <p className="mb-1 font-light ">
            Capital:{' '}
            <span className="text-sm text-muted-foreground">
              {data.capital}
            </span>
          </p>
        </div>
      </div>
    </Link>
  )
}
