import { environment } from 'src/environments/environment';
import { IApiPrefixes } from 'src/app/utils/interfaces/IApiPrefixes';
import { ApiPrefixesType } from 'src/app/utils/enums/apiPrefixes-type';

export const apiPrefix: IApiPrefixes = {
  book: ApiPrefixesType.book,
  contact: ApiPrefixesType.contact,
  course: ApiPrefixesType.course,
  degree: ApiPrefixesType.degree,
  job: ApiPrefixesType.job,
  language: ApiPrefixesType.language,
  me: ApiPrefixesType.me,
  project: ApiPrefixesType.project,
  testimonial: ApiPrefixesType.testimonial,
};

export const baseURL = environment.BASE_URL;
