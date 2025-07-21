import { Text } from "./components/Text";
import {
  CheckCircleIcon,
  CheckIcon,
  CheckSquareIcon,
  CircleIcon,
  ClipboardIcon,
  PencilIcon,
  PlusIcon,
  SpinnerIcon,
  SquareDutoneIcon,
  SquareIcon,
  TrashIcon,
  XIcon,
} from "./assets/icons";
import { Icon } from "./components/Icon";
import { Badge } from "./components/Badge";
import { Button } from "./components/Button";
import { ButtonIcon } from "./components/ButtonIcon";
import InputText from "./components/InputText";
import { InputCheckbox } from "./components/InputCheckbox";

function App() {
  return (
    <div className="flex flex-col gap-1">
      <div>
        <Text>Componente texto:</Text>
        <div className="flex flex-col gap-1">
          <Text as="h1" variant={"body-sm-bold"}>
            Hello
          </Text>
          <Text as="h2" variant={"body-md-bold"} className="text-green-dark">
            Hello
          </Text>
          <Text className="text-pink-light">Hello</Text>
        </div>
      </div>
      <Text>Componente Icon:</Text>
      <div className="flex gap-1">
        <Icon svg={CheckCircleIcon} className="fill-pink-base w-3 h-3" />
        <Icon svg={PencilIcon} className="fill-green-dark w-3 h-3" />
        <Icon svg={CheckIcon} className="fill-green-base w-3 h-3" />
        <Icon svg={CheckSquareIcon} className="fill-pink-base w-3 h-3" />
        <Icon svg={CircleIcon} className="fill-pink-base w-3 h-3" />
        <Icon svg={ClipboardIcon} className="fill-pink-base w-3 h-3" />
        <Icon svg={PlusIcon} className="fill-pink-base w-3 h-3" />
        <Icon svg={SpinnerIcon} animate className="fill-pink-base w-3 h-3" />
        <Icon svg={SquareDutoneIcon} className="fill-pink-base w-3 h-3" />
        <Icon svg={SquareIcon} className="fill-pink-base w-3 h-3" />
        <Icon svg={TrashIcon} className="fill-pink-base w-10 h-10" />
        <Icon svg={XIcon} className="fill-pink-base w-3 h-3" />
        {/* {Object.entries(Icons).forEach(([key, value])=>
        <Icon svg={key} />
        )} */}
      </div>
      <Text>Componente Badge:</Text>
      <div className="flex gap-1">
        <Badge variant={"secondary"}> 5 </Badge>
        <Badge>2 de 5</Badge>
      </div>
      <Text>Componente Button:</Text>
      <div className="flex gap-1">
        <Button variant={"secondary"}>Secondary</Button>
        <Button>Primary</Button>
        <Button icon={PlusIcon} size={"sm"}>
          Nova tarefa
        </Button>
      </div>
      <Text>Componente ButtonIcon:</Text>
      <div className="flex gap-1">
        <ButtonIcon icon={PlusIcon} />
        <ButtonIcon icon={CheckCircleIcon} variant={"secondary"} />
        <ButtonIcon icon={CheckIcon} variant={"tertiary"} />
        <ButtonIcon icon={PlusIcon} size={"lg"} disabled />
      </div>
      <Text>Componente InputText:</Text>
      <div>
        <InputText></InputText>
      </div>
      <Text>Componente InputCheckbox:</Text>
      <div>
        <InputCheckbox />
      </div>
    </div>
  );
}
export default App;
