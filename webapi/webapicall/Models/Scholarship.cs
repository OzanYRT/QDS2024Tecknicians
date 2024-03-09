public class Scholarship {
   public int id { get; set; }
   public string? name { get; set; }
   public string? amount { get; set; }
   public string? deadline { get; set; }
   public string? notes { get; set; }
   public string? levelofstudy { get; set; }
   public string? link { get; set; }
   public string? gender { get; set; }
   public string? citizenship { get; set; }
   public string? yearofstudy { get; set; }
   public string? schoolsattended { get; set; }
   public string? heritage { get; set; }
   public string? schoolofstudy { get; set; }
   public string? fieldofstudy { get; set; }
   public string? regionofresidence { get; set; }
   public string? courseload { get; set; }
   public string? regionofstudy { get; set; }
   public string? academicstanding { get; set; }
   public string? activities { get; set; }
   public string? financialneed { get; set; }
   public string? contactinfoname { get; set; }
   public string? contactinfoemail { get; set; }
   public string? contactinfophone { get; set; }
   public string? contactinfoaddress { get; set; }

   public override string ToString() {
        return $"Name: {name}\n" +
               $"Amount: {amount}\n" +
               $"Deadline: {deadline}\n" +
               $"Notes: {notes}\n" +
               $"Level of Study: {levelofstudy}\n" +
               $"Link: {link}\n" +
               $"Gender: {gender}\n" +
               $"Citizenship: {citizenship}\n" +
               $"Year of Study: {yearofstudy}\n" +
               $"Schools Attended: {schoolsattended}\n" +
               $"Heritage: {heritage}\n" +
               $"School of Study: {schoolofstudy}\n" +
               $"Field of Study: {fieldofstudy}\n" +
               $"Region of Residence: {regionofresidence}\n" +
               $"Course load: {courseload}\n" +
               $"Region of Study: {regionofstudy}\n" +
               $"Academic Standing: {academicstanding}\n" +
               $"Activities: {activities}\n" +
               $"Financial Need: {financialneed}\n" +
               $"Contact Info Name: {contactinfoname}\n" +
               $"Contact Info Email: {contactinfoemail}\n" +
               $"Contact Info Phone: {contactinfophone}\n" +
               $"Contact Info Address: {contactinfoaddress}";
    }
    
}