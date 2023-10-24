import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  //
  // async getTenantTokenForSystem(tenantId: string) {
  //   const miniApp = await this.miniAppService.getFirstMiniApp(tenantId);
  //   const tenant = await this.tenantService.findOneById(tenantId, {
  //     miniApps: true,
  //   });
  //   SYSTEM_ACCOUNT_TRAVO.tenant = tenant;
  //   const payload = {
  //     miniAppId: miniApp ? miniApp.id : undefined,
  //     tenantId,
  //     name: SYSTEM_ACCOUNT_TRAVO.name,
  //     phone: SYSTEM_ACCOUNT_TRAVO.phone,
  //     role: SYSTEM_ROLE.name,
  //   };
  //   return {
  //     staff: SYSTEM_ACCOUNT_TRAVO,
  //     accessToken: await this.jwtService.signAsync(payload),
  //   };
  // }
  //
  // async signIn(phone: string, email: string, password: string) {
  //   // for system user
  //   const system = await this.signInAsSystem(phone, password);
  //   if (system) return system;
  //
  //   let staff: Staff;
  //   if (phone) staff = await this.staffService.findByPhone(phone);
  //   if (email) staff = await this.staffService.findByEmail(email);
  //   if (!staff)
  //     throw new BadRequestException('Staff does not exist!', {
  //       cause: new Error(),
  //       description: 'Please sign up to use our service!',
  //     });
  //   if (!(await bcrypt.compare(password, staff.password))) {
  //     throw new BadRequestException('Phone or password is incorrect!');
  //   }
  //   const miniApp = await this.miniAppService.getFirstMiniApp(staff.tenantId);
  //   const payload = staffPayload(miniApp?.id, staff);
  //   return {
  //     staff,
  //     accessToken: await this.jwtService.signAsync(payload),
  //   };
  // }
  //
  // async signInAsSystem(phone: string, password: string) {
  //   if (
  //     !(
  //       (phone == SYSTEM_ACCOUNT_TRAVO.phone &&
  //         password == SYSTEM_ACCOUNT_TRAVO.password) ||
  //       (phone == SYSTEM_ACCOUNT_KEKEE.phone &&
  //         password == SYSTEM_ACCOUNT_KEKEE.password)
  //     )
  //   )
  //     return undefined;
  //
  //   const systemStaff =
  //     phone == SYSTEM_ACCOUNT_KEKEE.phone
  //       ? SYSTEM_ACCOUNT_KEKEE
  //       : SYSTEM_ACCOUNT_TRAVO;
  //
  //   return {
  //     staff: systemStaff,
  //     accessToken: await this.jwtService.signAsync(
  //       systemPayload(systemStaff, phone),
  //     ),
  //   };
  // }
  //
  // async signUp(createStaffDto: CreateStaffDto, tenantId: string) {
  //   const oldStaff = await this.staffService.findByPhone(createStaffDto.phone);
  //   if (oldStaff) {
  //     throw new BadRequestException('Staff are already exist!');
  //   }
  //
  //   const staff = await this.staffService.create(
  //     {
  //       ...createStaffDto,
  //       password: await this.passwordHasher(createStaffDto.password),
  //     },
  //     tenantId,
  //   );
  //
  //   const payload = {
  //     name: createStaffDto.name,
  //     sub: staff.id,
  //     role: oldStaff.role.name,
  //   };
  //
  //   return {
  //     ...staff,
  //     password: undefined,
  //     accesstoken: await this.jwtService.signAsync(payload),
  //   };
  // }
  // async getKekeeManagerToken(accessToken: string, zaloToken: string) {
  //   const phone = await this.zaloService.getPhoneByToken(
  //     zaloToken,
  //     accessToken,
  //   );
  //   const staff = await this.staffService.findByPhone(phone, true);
  //   const miniApp = await this.miniAppService.getFirstMiniApp(staff.tenantId);
  //   const payload = staffPayload(miniApp?.id, staff);
  //   delete staff.password;
  //   delete staff.tenantId;
  //   return {
  //     staff,
  //     accessToken: await this.jwtService.signAsync(payload),
  //   };
  // }
  //
  // async getMiniAppToken(miniAppTokenDto: MiniAppTokenDto) {
  //   const miniApp = await this.miniAppService.findOneById(
  //     miniAppTokenDto.miniAppId,
  //   );
  //   const tenantId = miniApp?.tenantId;
  //   if (!tenantId) throw new BadRequestException('Mini app does not exist!');
  //
  //   const newCustomer = await this.customerService.createIfNotExist(
  //     miniAppTokenDto.customer,
  //     tenantId,
  //   );
  //
  //   const payload = customerPayload(
  //     tenantId,
  //     miniAppTokenDto.miniAppId,
  //     newCustomer.id,
  //   );
  //   delete newCustomer.tenantId;
  //   return {
  //     customer: newCustomer,
  //     accessToken: await this.jwtService.signAsync(payload),
  //   };
  // }
  // async changePassword(
  //   phone: string,
  //   oldPassword: string,
  //   newPassword: string,
  // ) {
  //   const staff = await this.staffService.findByPhone(phone);
  //   if (!(await bcrypt.compare(oldPassword, staff.password))) {
  //     throw new BadRequestException('Old password not correct!');
  //   }
  //
  //   const password = await this.passwordHasher(newPassword);
  //   this.staffService.update(
  //     staff.id,
  //     { password } as UpdateStaffDto,
  //     staff.tenantId,
  //   );
  // }

  async passwordHasher(password: string) {
    const saltOrRounds = 10;
    return await bcrypt.hash(password, saltOrRounds);
  }
}
