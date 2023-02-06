
export interface UrlInfoType {
  long_url: string;
  link: string;
  id: string
}

export interface formPropsType {
  submitFunction: (value: string) => void;
  header: string;
  result: string;
}