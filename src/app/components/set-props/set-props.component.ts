import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InitWcService } from 'src/app/services/init-wc.service';

interface SetWCDataForm {
  id: FormControl<string | null>;
  idToken: FormControl<string | null>;
  plataform: FormControl<string | null>;
  deviceId: FormControl<string | null>;
}

@Component({
  selector: 'app-set-props',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './set-props.component.html',
  styleUrls: ['./set-props.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetPropsComponent implements OnInit {
  public form: FormGroup<SetWCDataForm> | undefined;
  public wcData?: {
    id?: string;
    plataform?: string;
    deviceId?: string;
  };

  constructor(private fb: FormBuilder, private initWcService: InitWcService) {}

  ngOnInit(): void {
    this.wcData = this.initWcService.wcData;
    this.buildForm();
  }

  onSubmit() {
    if (this.form?.invalid) return;
    this.initWcService.setShowWC$ = true;

    this.initWcService.setWcData = {
      ...this.initWcService.wcData,
      id: this.form?.controls?.id?.value!,
      plataform: this.form?.controls?.plataform?.value!,
      deviceId: this.form?.controls?.deviceId?.value!,
    };

    if (this.form?.controls?.idToken?.value) {
      localStorage.setItem('IdToken', this.form?.controls?.idToken?.value);
    }
  }

  private buildForm(): void {
    this.form = this.fb.group({
      idToken: [localStorage.getItem('IdToken') ?? '', Validators.required],
      id: [this.initWcService?.wcData?.id ?? '30036470'],
      plataform: [this.initWcService?.wcData?.plataform ?? 'web'],
      deviceId: [
        this.initWcService?.wcData?.deviceId ??
          '16182412-1fb1-47df-bdba-b19e4a81df38',
      ],
    });
  }
}
