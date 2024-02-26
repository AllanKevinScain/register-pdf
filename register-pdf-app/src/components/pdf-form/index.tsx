import { Input } from "..";
import { RowContainer } from "../";
import { PdfCardInterface } from "./pdf-form.interface";

export function PdfForm(props: PdfCardInterface) {
  const {
    handleSubmit,
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    allDisabled = false,
    hasEditButton = false,
    hasSaveButton = false,
  } = props;

  return (
    <form
      className="flex flex-col gap-4 p-12 scrollbar-y"
      onSubmit={handleSubmit}
    >
      <RowContainer className="flex-col border rounded-lg p-1">
        <h1 className="flex justify-center">
          ENCONTRO DE CASAIS COM CRISTO - ECC
        </h1>
        <RowContainer>
          <Input.default
            id="archdiocese"
            disabled={allDisabled}
            value={values.archdiocese}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.archdiocese}
            isinvalid={!!errors.archdiocese && touched.archdiocese!}
            placeholder="(Arqui) Diocese"
          />
          <Input.default
            id="city"
            disabled={allDisabled}
            value={values.city}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.city}
            isinvalid={!!errors.city && touched.city!}
            placeholder="city"
          />
        </RowContainer>
        <Input.default
          id="parish"
          disabled={allDisabled}
          value={values.parish}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.parish}
          isinvalid={!!errors.parish && touched.parish!}
          placeholder="Paróquia"
        />
      </RowContainer>

      <RowContainer className="flex-col border rounded-lg p-1">
        <RowContainer>
          <Input.default
            id="hisName"
            disabled={allDisabled}
            value={values.hisName}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.hisName}
            isinvalid={!!errors.hisName && touched.hisName!}
            placeholder="Ele"
          />
          <Input.default
            id="hisNickname"
            disabled={allDisabled}
            value={values.hisNickname}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.hisNickname}
            isinvalid={!!errors.hisNickname && touched.hisNickname!}
            placeholder="Nome usual"
          />
        </RowContainer>

        <RowContainer>
          <Input.default
            id="hisBirthdate"
            disabled={allDisabled}
            value={values.hisBirthdate}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.hisBirthdate}
            isinvalid={!!errors.hisBirthdate && touched.hisBirthdate!}
            placeholder="Nascimento"
          />
          <Input.default
            id="hisProfission"
            disabled={allDisabled}
            value={values.hisProfission}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.hisProfission}
            isinvalid={!!errors.hisProfission && touched.hisProfission!}
            placeholder="Profissão"
          />
          <Input.default
            id="hisReligion"
            disabled={allDisabled}
            value={values.hisReligion}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.hisReligion}
            isinvalid={!!errors.hisReligion && touched.hisReligion!}
            placeholder="Religião"
          />
        </RowContainer>
      </RowContainer>

      <RowContainer className="flex-col border rounded-lg p-1">
        <RowContainer>
          <Input.default
            id="herName"
            disabled={allDisabled}
            value={values.herName}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.herName}
            isinvalid={!!errors.herName && touched.herName!}
            placeholder="Ela"
          />
          <Input.default
            id="herNickname"
            disabled={allDisabled}
            value={values.herNickname}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.herNickname}
            isinvalid={!!errors.herNickname && touched.herNickname!}
            placeholder="Nome usual"
          />
        </RowContainer>

        <RowContainer>
          <Input.default
            id="herBirthdate"
            disabled={allDisabled}
            value={values.herBirthdate}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.herBirthdate}
            isinvalid={!!errors.herBirthdate && touched.herBirthdate!}
            placeholder="Nascimento"
          />
          <Input.default
            id="herProfission"
            disabled={allDisabled}
            value={values.herProfission}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.herProfission}
            isinvalid={!!errors.herProfission && touched.herProfission!}
            placeholder="Profissão"
          />
          <Input.default
            id="herReligion"
            disabled={allDisabled}
            value={values.herReligion}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.herReligion}
            isinvalid={!!errors.herReligion && touched.herReligion!}
            placeholder="Religião"
          />
        </RowContainer>
      </RowContainer>

      <RowContainer className="flex-col border rounded-lg p-1">
        <RowContainer className="justify-center">
          <span className="text-nowrap">Casamento Relgioso</span>
          <label htmlFor="crs" className="flex gap-2 text-lg">
            {/* <Input.default type="checkbox" /> */}
            Sim disabled={allDisabled}
          </label>
          <label htmlFor="crn" className="flex gap-2 text-lg">
            {/* <Input.default type="checkbox" /> */}
            Não disabled={allDisabled}
          </label>
        </RowContainer>
        <Input.default
          id="whichParish"
          disabled={allDisabled}
          value={values.whichParish}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.whichParish}
          isinvalid={!!errors.whichParish && touched.whichParish!}
          placeholder="Qual a Paróquia?"
        />
      </RowContainer>

      <RowContainer className="flex-col border rounded-lg p-1">
        <Input.default
          id="address"
          disabled={allDisabled}
          value={values.address}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.address}
          isinvalid={!!errors.address && touched.address!}
          placeholder="address"
        />
        <Input.default
          id="parishAddress"
          disabled={allDisabled}
          value={values.parishAddress}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.parishAddress}
          isinvalid={!!errors.parishAddress && touched.parishAddress!}
          placeholder="Paróquia"
        />
        <Input.default
          id="district"
          disabled={allDisabled}
          value={values.district}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.district}
          isinvalid={!!errors.district && touched.district!}
          placeholder="district"
        />
        <RowContainer>
          <Input.default
            id="phoneNumber"
            disabled={allDisabled}
            value={values.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.phoneNumber}
            isinvalid={!!errors.phoneNumber && touched.phoneNumber!}
            placeholder="phoneNumber"
          />
          <Input.default
            id="cityState"
            disabled={allDisabled}
            value={values.cityState}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.cityState}
            isinvalid={!!errors.cityState && touched.cityState!}
            placeholder="city/Estado"
          />
        </RowContainer>
        <RowContainer>
          <Input.default
            id="cep"
            disabled={allDisabled}
            value={values.cep}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.cep}
            isinvalid={!!errors.cep && touched.cep!}
            placeholder="Cep"
          />
          <Input.default
            id="addressNumber"
            disabled={allDisabled}
            value={values.addressNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.addressNumber}
            isinvalid={!!errors.addressNumber && touched.addressNumber!}
            placeholder="Número"
          />
          <Input.default
            id="apartmentNumber"
            disabled={allDisabled}
            value={values.apartmentNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.apartmentNumber}
            isinvalid={!!errors.apartmentNumber && touched.apartmentNumber!}
            placeholder="Apart"
          />
        </RowContainer>
      </RowContainer>

      <RowContainer className="flex-col border rounded-lg p-1">
        <h2 className="flex justify-center">address PROFISSIONAL</h2>
        <RowContainer>
          <Input.default
            id="hisProfessionalAddress"
            disabled={allDisabled}
            value={values.hisProfessionalAddress}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.hisProfessionalAddress}
            isinvalid={
              !!errors.hisProfessionalAddress && touched.hisProfessionalAddress!
            }
            placeholder="Ele"
          />
          <Input.default
            id="hisProfessionalPhoneNumber"
            disabled={allDisabled}
            value={values.hisProfessionalPhoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.hisProfessionalPhoneNumber}
            isinvalid={
              !!errors.hisProfessionalPhoneNumber &&
              touched.hisProfessionalPhoneNumber!
            }
            placeholder="phoneNumber"
          />
          <Input.default
            id="dateWedding"
            disabled={allDisabled}
            value={values.dateWedding}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.dateWedding}
            isinvalid={!!errors.dateWedding && touched.dateWedding!}
            placeholder="Data do casamento"
          />
        </RowContainer>
        <RowContainer>
          <Input.default
            id="herProfessionalAddress"
            disabled={allDisabled}
            value={values.herProfessionalAddress}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.herProfessionalAddress}
            isinvalid={
              !!errors.herProfessionalAddress && touched.herProfessionalAddress!
            }
            placeholder="Ela"
          />
          <Input.default
            id="herProfessionalPhoneNumber"
            disabled={allDisabled}
            value={values.herProfessionalPhoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.herProfessionalPhoneNumber}
            isinvalid={
              !!errors.herProfessionalPhoneNumber &&
              touched.herProfessionalPhoneNumber!
            }
            placeholder="phoneNumber"
          />
          <Input.default
            id="numberOfChildren"
            disabled={allDisabled}
            value={values.numberOfChildren}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.numberOfChildren}
            isinvalid={!!errors.numberOfChildren && touched.numberOfChildren!}
            placeholder="Número de filhos"
          />
        </RowContainer>
      </RowContainer>

      <RowContainer className="flex-col border rounded-lg p-1">
        <h2 className="flex justify-center">ECC 1ª ETAPA</h2>
        <Input.default
          id="numberFirstStep"
          disabled={allDisabled}
          value={values.numberFirstStep}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.numberFirstStep}
          isinvalid={!!errors.numberFirstStep && touched.numberFirstStep!}
          placeholder="Número do curso"
        />
        <Input.default
          id="dateFirstStep"
          disabled={allDisabled}
          value={values.dateFirstStep}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.dateFirstStep}
          isinvalid={!!errors.dateFirstStep && touched.dateFirstStep!}
          placeholder="Data"
        />
        <Input.default
          id="localFirstStep"
          disabled={allDisabled}
          value={values.localFirstStep}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.localFirstStep}
          isinvalid={!!errors.localFirstStep && touched.localFirstStep!}
          placeholder="Local"
        />
        <Input.default
          id="activitiesFirstStage"
          disabled={allDisabled}
          value={values.activitiesFirstStage}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.activitiesFirstStage}
          isinvalid={
            !!errors.activitiesFirstStage && touched.activitiesFirstStage!
          }
          placeholder="Atividades"
        />
      </RowContainer>

      <RowContainer className="flex-col border rounded-lg p-1">
        <h2 className="flex justify-center">ECC 2ª ETAPA</h2>
        <Input.default
          id="numberSecondStep"
          disabled={allDisabled}
          value={values.numberSecondStep}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.numberSecondStep}
          isinvalid={!!errors.numberSecondStep && touched.numberSecondStep!}
          placeholder="Número do curso"
        />
        <Input.default
          id="dateSecondStep"
          disabled={allDisabled}
          value={values.dateSecondStep}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.dateSecondStep}
          isinvalid={!!errors.dateSecondStep && touched.dateSecondStep!}
          placeholder="Data"
        />
        <Input.default
          id="localSecondStep"
          disabled={allDisabled}
          value={values.localSecondStep}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.localSecondStep}
          isinvalid={!!errors.localSecondStep && touched.localSecondStep!}
          placeholder="Local"
        />
        <Input.default
          id="activitiesSecondStage"
          disabled={allDisabled}
          value={values.activitiesSecondStage}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.activitiesSecondStage}
          isinvalid={
            !!errors.activitiesSecondStage && touched.activitiesSecondStage!
          }
          placeholder="Atividades"
        />
      </RowContainer>

      <RowContainer className="flex-col border rounded-lg p-1">
        <h2 className="flex justify-center">ECC 3ª ETAPA</h2>
        <Input.default
          id="numberThirdStep"
          disabled={allDisabled}
          value={values.numberThirdStep}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.numberThirdStep}
          isinvalid={!!errors.numberThirdStep && touched.numberThirdStep!}
          placeholder="Número do curso"
        />
        <Input.default
          id="dateThirdStep"
          disabled={allDisabled}
          value={values.dateThirdStep}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.dateThirdStep}
          isinvalid={!!errors.dateThirdStep && touched.dateThirdStep!}
          placeholder="Data"
        />
        <Input.default
          id="localThirdStep"
          disabled={allDisabled}
          value={values.localThirdStep}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.localThirdStep}
          isinvalid={!!errors.localThirdStep && touched.localThirdStep!}
          placeholder="Local"
        />
        <Input.default
          id="activitiesThirdStage"
          disabled={allDisabled}
          value={values.activitiesThirdStage}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.activitiesThirdStage}
          isinvalid={
            !!errors.activitiesThirdStage && touched.activitiesThirdStage!
          }
          placeholder="Atividades"
        />
      </RowContainer>

      <RowContainer className="flex-col border rounded-lg p-1">
        <Input.area
          id="engagementParish"
          value={values.engagementParish}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.engagementParish}
          isinvalid={!!errors.engagementParish && touched.engagementParish!}
          placeholder="Engajamento parishl"
        />
        <Input.area
          id="habilities"
          value={values.habilities}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.habilities}
          isinvalid={!!errors.habilities && touched.habilities!}
          placeholder="habilities"
        />
      </RowContainer>

      <b className="text-xs">
        OBS: relatórios de atividades precisam ser registrados a mão
      </b>
      {hasSaveButton && (
        <button className="bg-logo-1 text-slate-900 hover:ring-2 hover:ring-primary-600 rounded-lg py-2">
          Cadastrar ficha
        </button>
      )}
      {hasEditButton && (
        <button className="bg-logo-1 text-slate-900 hover:ring-2 hover:ring-primary-600 rounded-lg py-2">
          Cadastrar ficha
        </button>
      )}
    </form>
  );
}
