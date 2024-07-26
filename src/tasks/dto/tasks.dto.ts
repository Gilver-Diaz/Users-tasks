import { taskSatus } from '../task.entity';
import {
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreateTasksDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @IsString()
  description: string;
}

//los DTO son para especificar que tipo de datos mostramos.
// es algo mas especifico

export class updateTaskDtop {
  @IsString()
  @IsOptional()
  title?: string;
  @IsString()
  @IsOptional()
  description?: string;
  @IsString()
  @IsOptional()
  @IsIn([taskSatus.PENDING, taskSatus.DONE, taskSatus.TN_PROGRESS])
  status?: taskSatus;

  //le coloco la valicon opcional por que aca los parametros son opcionales! :D
}

//aca son los datos que pude actialiar pero le muestro el ? para quee se sepa
//puede cambiar o no , es indefinido!
